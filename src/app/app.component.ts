import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VitrineComponent } from './pages/vitrine/vitrine.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VitrineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'randomGroup';
}
