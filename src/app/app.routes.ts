import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListsComponent } from './pages/lists/lists.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'lists', title: 'Page Listes', component: ListsComponent },
];
