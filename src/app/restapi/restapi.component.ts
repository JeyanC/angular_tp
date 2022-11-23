import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  _books: Book[] = []

  // Get all books
  getBooks() {
    this.api.getBooks().subscribe((data) =>{
      this._books = data
    })
  }


}
