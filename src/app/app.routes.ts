import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { CreateListComponent } from './components/create-list/create-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'newList', component: CreateListComponent },
  { path: 'viewList', component: ViewListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

export default routes;
