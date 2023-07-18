import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';

@Component({
  selector: 'cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
})
export class CardsPageComponent {
  public pageName: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    public booksService: BooksService
  ) {
    this.pageName = activateRoute.snapshot.params['pageName'];
  }

  public testSubscribe(): void {
    const mockBook: CommenApplicationNamespace.Book = {
      bookId: 13123123,
      name: 'Test Book',
      authorName: 'F. Scott Fitzgerald',
      publishingYear: new Date('1925-04-10'),
      publishersName: "Charles Scribner's Sons",
      numberOfPages: 180,
      numberOfCopies: 1000,
    };
    this.booksService.addBook(mockBook);
  }
}
