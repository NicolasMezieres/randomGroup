import { Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

//Ajout des paths pour naviguer à register
export const routes: Routes = [
  {
    path: '',
    title: 'Page Vitrine',
    component: AppComponent,
  },
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
];
