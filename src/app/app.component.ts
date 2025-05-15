import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <a routerLink="./register">Inscription</a>
  `
})
export class AppComponent {
  title = 'randomGroup';
}
