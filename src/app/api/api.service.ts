import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Book} from "../model/book.model";

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<any> {
    let body = JSON.stringify(book)
    alert(book)
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.post(API_URL + '/books', body, {headers}).pipe(catchError(this.handleError))
  }

  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<Book>(API_URL + '/books', {headers}).pipe(catchError(this.handleError))
  }

  getBooksById(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<Book>(API_URL + '/books/' + bookId, {headers}).pipe(catchError(this.handleError))
  }

  updateBook(book: Book): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.put(API_URL + '/books/' + book.bookId, book, {headers}).pipe(catchError(this.handleError))
  }

  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.delete(API_URL + '/books/' + bookId, {headers}).pipe(catchError(this.handleError))
  }


  private handleError(error: Response | any){
    return throwError(error)
  }
}
