import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  imports: [],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css',
})
export class ErrorMsgComponent {
  @Input() field: string = '';
}
