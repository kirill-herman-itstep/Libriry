import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent {
  public pageName: string = '';
  constructor(private activateRoute: ActivatedRoute) {
    this.pageName = activateRoute.snapshot.params['pageName'];
  }
}
