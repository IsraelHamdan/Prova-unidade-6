import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListasDTO } from '../DTO/ListasDTO';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'http://localhost:3000/listas';
  constructor(private http: HttpClient) {}

  createList(newList: ListasDTO) {
    try {
      this.http.post(this.api, newList).subscribe((res) => {
        console.info('Lista criada', res);
      });
    } catch (err) {
      console.error(err);
    }
  }
  // private async getExistingLists(firstValueFrom:): Promise<ListasDTO[]> {
  //   try {
  //     const res = await firstValueFrom(this.http.get<ListasDTO[]>(this.api));
  //     return res || [];
  //   } catch (err) {
  //     console.error(`Erro ao buscar listas: ${err}`);
  //     return [];
  //   }
  // }
}
