import { Component, OnInit } from '@angular/core';
import { BibliotekService } from '../../service/bibliotek.service';
import { Bok } from '../../models/bok.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  // Importera Router

@Component({
  selector: 'app-lagg-till-bok',
  templateUrl: './lagg-till-bok.component.html',
  styleUrls: ['./lagg-till-bok.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LaggTillBokComponent implements OnInit {

  nyBok: Bok = {
    id: 0,
    title: '',
    author: '',
    year: 0,
    genre: '',
    description: '',
    isAvailable: false,
  };

  constructor(
    private bibliotekService: BibliotekService,
    private route: ActivatedRoute,
    private router: Router  // Lägg till Router här
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];  // Hämta ID från query-parametern
      if (id) {
        this.laddaBok(id);  // Hämta boken baserat på ID
      }
    });
  }

  laddaBok(id: number): void {
    this.bibliotekService.getBook(id).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.nyBok = response.result as Bok;  // Fyll i formuläret med bokens data
        }
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.nyBok.id === 0) {
      // Lägg till ny bok
      this.bibliotekService.addBook(this.nyBok).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            console.log('Bok tillagd', response.result);
            this.resetForm();
            this.router.navigate(['/bocker']);  // Omdirigera till boklistan
          }
        },
        error: (err) => console.error(err)
      });
    } else {
      // Uppdatera befintlig bok
      this.bibliotekService.updateBook(this.nyBok).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            console.log('Bok uppdaterad', response.result);
            this.resetForm();
            this.router.navigate(['/bocker']);  // Omdirigera till boklistan
          }
        },
        error: (err) => console.error(err)
      });
    }
  }

  resetForm(): void {
    this.nyBok = {
      id: 0,
      title: '',
      author: '',
      year: 0,
      genre: '',
      description: '',
      isAvailable: false,
    };
  }
}