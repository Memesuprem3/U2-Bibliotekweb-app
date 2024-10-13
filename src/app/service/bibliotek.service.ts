import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bok } from '../models/bok.model';

interface ApiResponse<T> {
  isSuccess: boolean;
  result: T;  // Dynamisk typ beroende på vad som returneras
  statusCode: number;
  errorMessages: string[];
}

@Injectable({
  providedIn: 'root'
})
export class BibliotekService {

  private baseUrl = 'https://localhost:7059/api/';  // Din API-baskurl

  constructor(private http: HttpClient) { }

  // Hämta alla böcker
  getAllBooks(): Observable<ApiResponse<Bok[]>> {
    return this.http.get<ApiResponse<Bok[]>>(this.baseUrl + 'books');
  }

  // Hämta en specifik bok med ID
  getBook(id: number): Observable<ApiResponse<Bok>> {
    return this.http.get<ApiResponse<Bok>>(`${this.baseUrl}book/${id}`);
  }

  // Lägg till ny bok
  addBook(book: Bok): Observable<ApiResponse<Bok>> {
    return this.http.post<ApiResponse<Bok>>(this.baseUrl + 'book', book);
  }

  // Uppdatera befintlig bok
  updateBook(book: Bok): Observable<ApiResponse<Bok>> {
    return this.http.put<ApiResponse<Bok>>(this.baseUrl + 'book', book);
  }

  // Ta bort bok
  deleteBook(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}book/${id}`);
  }
}