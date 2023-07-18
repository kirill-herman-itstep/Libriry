import { Component } from '@angular/core';
import { CommenApplicationNamespace } from './entities/interfaces/app.interfaces';
import { BOOKS } from './entities/mock/books.mock';
import { PageButtons, PageNames } from './entities/enums/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public books = BOOKS;

  public pageNames = PageNames;
  public pageButtons = PageButtons;

  get availablePages() {
    return Object.values(this.pageNames);
  }
}
