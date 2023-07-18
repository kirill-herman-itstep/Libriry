import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsPageComponent } from './visitors-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VisitorsPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [VisitorsPageComponent],
})
export class VisitorsPageModule {}
