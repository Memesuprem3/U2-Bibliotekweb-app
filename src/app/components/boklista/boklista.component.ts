import { Component, OnInit } from '@angular/core';
import { BibliotekService } from '../../service/bibliotek.service';
import { Bok } from '../../models/bok.model';
import { Router } from '@angular/router';  // Importera Router
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boklista',
  templateUrl: './boklista.component.html',
  styleUrls: ['./boklista.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BoklistaComponent implements OnInit {

  bocker: Bok[] = [];

  constructor(private bibliotekService: BibliotekService, private router: Router) { }

  ngOnInit(): void {
    this.hamtaBocker();
  }
  
  hamtaBocker(): void {
    this.bibliotekService.getAllBooks().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.bocker = response.result;  // Hämta böcker från "result"
        }
      },
      error: (err) => console.error(err)
    });
  }

  onDelete(id: number): void {
    console.log('Deleting book with id:', id);
    this.bibliotekService.deleteBook(id).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.hamtaBocker();  // Uppdatera listan efter borttagning
          console.log('Book deleted successfully');
        }
      },
      error: (err) => {
        console.error('Error deleting book:', err);
      }
    });
  }

  editBook(bok: Bok): void {
    this.router.navigate(['/lagg-till-bok'], { queryParams: { id: bok.id } });
  }
}
