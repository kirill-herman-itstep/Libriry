import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-element-modal',
  templateUrl: './add-element-modal.component.html',
  styleUrls: ['./add-element-modal.component.scss'],
})
export class AddElementModalComponent {
  @Input()
  headerName!: string;

  @Input()
  inputsNames!:string[]
}
