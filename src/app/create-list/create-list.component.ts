import { Component } from '@angular/core';
import { ListasDTO } from '../../DTO/ListasDTO';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    HttpClientModule,
  ],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.sass',
})
export class CreateListComponent {
  private api = 'http://localhost:3000/listas';
  createItemForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.createItemForm = this.fb.group({
      listName: ['', Validators.required],
      items: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.addItem();
  }

  addItem(): void {
    const items = this.createItemForm.get('items') as FormArray;
    items.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.fb.group({
      id: 0,
      name: ['', Validators.required],
      price: [0],
      store: [''],
    });
  }

  get itemsControls(): FormGroup[] {
    return (this.createItemForm.get('items') as FormArray)
      .controls as FormGroup[];
  }
  private isFormValid(): boolean {
    if (this.createItemForm.invalid) {
      this.createItemForm.markAllAsTouched();
      console.error('formulário invalido');
      return false;
    }
    return true;
  }
  private async getExistingLists(): Promise<ListasDTO[]> {
    try {
      const res = await firstValueFrom(this.http.get<ListasDTO[]>(this.api));
      return res || [];
    } catch (err) {
      console.error(`Erro ao buscar listas: ${err}`);
      return [];
    }
  }
  private calcNewListId(existingLists: ListasDTO[]): number {
    return existingLists.length > 0
      ? Math.max(...existingLists.map((list) => list.id)) + 1
      : 1;
  }
  private buildList(newListId: number): ListasDTO {
    const newList: ListasDTO = {
      id: newListId,
      name: this.createItemForm.get('listName')?.value,
      itens: [],
    };
    const items = this.createItemForm.get('items') as FormArray;
    items.controls.filter((i, idx) => {
      newList.itens.push({
        id: idx + 1,
        name: i.get('name')?.value,
        price: i.get('price')?.value,
        store: i.get('store')?.value,
        isBuyed: false,
      });
    });
    return newList;
  }
  private async sendRequest(newList: ListasDTO) {
    this.http.post(this.api, newList).subscribe(
      (res) => {
        console.log('lista criada:', res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  async createList() {
    if (!this.isFormValid()) return;
    try {
      const existingLists = await this.getExistingLists();
      const newListId = this.calcNewListId(existingLists);
      const newList = this.buildList(newListId);
      this.sendRequest(newList);
    } catch (err) {}
  }
}
