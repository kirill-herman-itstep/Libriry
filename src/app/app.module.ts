import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageModule } from './books-page/books-page.module';
import { SharedModule } from './shared/shared.module';
import { VisitorsPageModule } from './visitors-page/visitors-page.module';
import { CardsPageModule } from './cards-page/cards-page.module';
import { StatisticsPageModule } from './statistics-page/statistics-page.module';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksPageModule,
    SharedModule,
    CardsPageModule,
    StatisticsPageModule,
    VisitorsPageModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
