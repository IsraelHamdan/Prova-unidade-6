import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-view-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CardComponent, CardComponent],
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.sass',
})
export class ViewListComponent {
  private api = 'http://localhost:3000/listas';

  constructor(private http: HttpClient) {}
}
