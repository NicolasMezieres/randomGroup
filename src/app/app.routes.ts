import { Routes } from '@angular/router';
import { AppComponent } from "../app/app.component";
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';

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
