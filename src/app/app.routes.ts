import { Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListsComponent } from './pages/lists/lists.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  {
    path: 'register',
    title: 'Page Inscription',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Page Connexion',
    component: LoginComponent,
  },
  { path: 'lists', title: 'Page Listes', component: ListsComponent },
];
