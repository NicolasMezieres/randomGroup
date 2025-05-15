import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { VitrineComponent } from './pages/vitrine/vitrine.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MentionsComponent, VitrineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'randomGroup';
}
