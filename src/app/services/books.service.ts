import { Injectable } from '@angular/core';

import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class BooksService {
  public bookList: CommenApplicationNamespace.Book[] = [];

  constructor(private http: HttpClient) {}

  public getBookList(): Observable<CommenApplicationNamespace.Book[]> {
    return this.http
      .get('http://localhost:3000/getBooks')
      .pipe(map((response: any) => response.result));
  }

  public addBook(book: CommenApplicationNamespace.Book) {
    this.bookList.push(book);
  }

  public editBook(editedBook: CommenApplicationNamespace.Book): void {
    const findBook = (book: CommenApplicationNamespace.Book) =>
      book.bookId === editedBook.bookId;

    if (this.bookList.find(findBook)) {
      this.bookList.splice(this.bookList.findIndex(findBook), 1, editedBook);
    }
  }

  public removeBook() {}
}
