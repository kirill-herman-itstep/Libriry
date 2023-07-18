import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsPageComponent } from './statistics-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StatisticsPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [StatisticsPageComponent],
})
export class StatisticsPageModule {}
