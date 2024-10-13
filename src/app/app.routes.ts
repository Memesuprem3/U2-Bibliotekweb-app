import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'bocker', pathMatch: 'full' },
  { path: 'bocker', loadComponent: () => import('./components/boklista/boklista.component').then(m => m.BoklistaComponent) },
  { path: 'lagg-till-bok', loadComponent: () => import('./components/lagg-till-bok/lagg-till-bok.component').then(m => m.LaggTillBokComponent) },
  { path: 'sok-bok', loadComponent: () => import('./components/sok-bok/sok-bok.component').then(m => m.SokBokComponent) }
];