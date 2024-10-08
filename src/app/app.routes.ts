import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'newList', component: CreateListComponent },
  { path: 'viewList', component: ViewListComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home' },
];

export default routes;
