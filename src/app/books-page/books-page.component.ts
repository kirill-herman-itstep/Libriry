import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageButtons } from '../entities/enums/pages.enum';

import { BooksService } from '../services/books.service';
import { BooksProperties } from '../entities/enums/books.enum';
import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnChanges {
  @Input() books!: CommenApplicationNamespace.Book[] | null;

  public pageName: string = '';
  public buttonName = PageButtons.Book;
  public bookProperties = Object.keys(BooksProperties);
  public toggleChecked = false;

  constructor(
    private activateRoute: ActivatedRoute,
    public booksService: BooksService
  ) {
    this.pageName = activateRoute.snapshot.params['pageName'];
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // ngOnInit(): void {
  //   // .subscribe((response) => {

  // }

  public addBook() {
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

    this.toggleChecked = !this.toggleChecked;
  }

  public toggleChange(data: any) {
    console.log(data);
  }
}
