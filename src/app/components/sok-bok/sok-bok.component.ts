import { Component } from '@angular/core';
import { BibliotekService } from '../../service/bibliotek.service';
import { Bok } from '../../models/bok.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sok-bok',
  templateUrl: './sok-bok.component.html',
  styleUrls: ['./sok-bok.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  
})
export class SokBokComponent {
  bookId: number = 0;
  bok: Bok | null = null;

  constructor(private bibliotekService: BibliotekService) {}

  onSearch(): void {
    if (this.bookId > 0) {
      this.bibliotekService.getBook(this.bookId).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.bok = response.result;  
          } else {
            this.bok = null; 
          }
        },
        error: (err) => {
          console.error(err);
          this.bok = null;  
        }
      });
    }
  }
}