import { Component } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Observable } from 'rxjs';
import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';

@Component({
  selector: 'books-page-container',
  template: `<books-page [books]="books | async"></books-page>`,
})
export class BooksPageContainer {
  public books: Observable<CommenApplicationNamespace.Book[]>;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBookList();
  }
}
