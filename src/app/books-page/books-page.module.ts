import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page.component';
import { SharedModule } from '../shared/shared.module';
import { BooksPageContainer } from './books-page.container';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [BooksPageComponent, BooksPageContainer],
  imports: [CommonModule, SharedModule, MatSlideToggleModule],
  exports: [BooksPageComponent],
})
export class BooksPageModule {}
