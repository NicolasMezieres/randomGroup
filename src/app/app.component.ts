import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectedComponent } from './components/header/connected/connected.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'randomGroup';
}
