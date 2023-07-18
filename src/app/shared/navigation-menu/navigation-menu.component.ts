import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  @Input() availablePages!: string[];

  pathFinder(path: string): string {
    return `/${path.toLowerCase()}/${path}`;
  }
}
