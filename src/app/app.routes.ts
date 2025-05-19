import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListsComponent } from './pages/lists/lists.component';
import { LoginComponent } from './pages/login/login.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { RegisterComponent } from './pages/register/register.component';
import { VitrineComponent } from './pages/vitrine/vitrine.component';
import { ProfilsComponent } from './pages/profils/profils.component';

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
  { path: 'profile', component: ProfilsComponent },
  { path: 'vitrine', component: VitrineComponent },
  { path: 'lists', title: 'Page Listes', component: ListsComponent },
  { path: 'mentions', title: 'Page Mentions', component: MentionsComponent },
  { path: '**', redirectTo: 'vitrine', pathMatch: 'full' },
];
