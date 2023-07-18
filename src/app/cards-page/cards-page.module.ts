import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageComponent } from './cards-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardsPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardsPageComponent],
})
export class CardsPageModule {}
