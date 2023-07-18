import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROOT_ROUTES } from './entities/constants/router.constants';

const routes: Routes = ROOT_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
