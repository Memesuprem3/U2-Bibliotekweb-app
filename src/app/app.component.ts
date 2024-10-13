import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
<nav>
  <a routerLink="/bocker">Boklista</a> |
  <a routerLink="/lagg-till-bok">Lägg till bok</a> |
  <a routerLink="/sok-bok">Sök efter bok</a>
</nav>
<router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'U2-Bibliotekweb-app';
}