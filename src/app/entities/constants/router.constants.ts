import { Routes } from '@angular/router';
import { BooksPageComponent } from 'src/app/books-page/books-page.component';
import { BooksPageContainer } from 'src/app/books-page/books-page.container';
import { CardsPageComponent } from 'src/app/cards-page/cards-page.component';
import { NotFoundComponent } from 'src/app/not-found-component/not-found-component.component';
import { StatisticsPageComponent } from 'src/app/statistics-page/statistics-page.component';
import { VisitorsPageComponent } from 'src/app/visitors-page/visitors-page.component';

export const ROOT_ROUTES: Routes = [
  { path: '', redirectTo: 'books/Books', pathMatch: 'full' },
  { path: 'books/:pageName', component: BooksPageContainer },
  { path: 'cards/:pageName', component: CardsPageComponent },
  { path: 'statistics/:pageName', component: StatisticsPageComponent },
  { path: 'visitors/:pageName', component: VisitorsPageComponent },
  { path: '**', component: NotFoundComponent },
];
