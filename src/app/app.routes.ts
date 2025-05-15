import { Routes } from '@angular/router';
import { AppComponent } from "../app/app.component";
import { RegisterComponent } from '../components/register/register.component';

//Ajout des paths pour naviguer à register
export const routes: Routes = [
{
    path: '',
    title: 'Page Vitrine',
    component: AppComponent
}, {
    path: 'register',
    title: 'Page Inscription',
    component: RegisterComponent
}

];
