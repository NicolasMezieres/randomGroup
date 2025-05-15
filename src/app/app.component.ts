import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MentionsComponent } from "./pages/mentions/mentions.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MentionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomGroup';
}
