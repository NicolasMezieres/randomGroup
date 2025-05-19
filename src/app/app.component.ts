import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilsComponent } from "./pages/profils/profils.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'randomGroup';
}
