import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/bocker', pathMatch: 'full' },
  { path: 'bocker', loadComponent: () => import('./app/components/boklista/boklista.component').then(m => m.BoklistaComponent) },
  { path: 'lagg-till-bok', loadComponent: () => import('./app/components/lagg-till-bok/lagg-till-bok.component').then(m => m.LaggTillBokComponent) },
  { path: 'sok-bok', loadComponent: () => import('./app/components/sok-bok/sok-bok.component').then(m => m.SokBokComponent) }  // Lägg till denna rad
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));