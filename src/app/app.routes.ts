import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateListComponent } from './create-list/create-list.component';
import { LoginComponent } from './login/login.component';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newUser', component: CreateAccountComponent },
  { path: 'newList', component: CreateListComponent },
  { path: 'ViewList', component: ViewListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

export default routes;
