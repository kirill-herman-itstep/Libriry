import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'visitors-page',
  templateUrl: './visitors-page.component.html',
  styleUrls: ['./visitors-page.component.scss'],
})
export class VisitorsPageComponent {
  public pageName: string = '';
  constructor(private activateRoute: ActivatedRoute) {
    this.pageName = activateRoute.snapshot.params['pageName'];
  }
}
