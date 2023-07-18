import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageTableComponent } from './page-table/page-table.component';
import { TableFilterComponent } from './page-table/table-filter/table-filter.component';
import { TableComponent } from './page-table/table-content/table-content.component';
import { RouterModule } from '@angular/router';
import { ROOT_ROUTES } from '../entities/constants/router.constants';
import { AddElementModalComponent } from './add-element-modal/add-element-modal.component';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    PageHeaderComponent,
    PageTableComponent,
    TableFilterComponent,
    TableComponent,
    AddElementModalComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(ROOT_ROUTES)],
  exports: [
    NavigationMenuComponent,
    PageHeaderComponent,
    PageTableComponent,
    AddElementModalComponent,
  ],
})
export class SharedModule {}
