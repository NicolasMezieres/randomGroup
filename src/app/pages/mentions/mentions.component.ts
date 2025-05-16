import { Component } from '@angular/core';
import { HeaderDCComponent } from "../../components/header-dc/header-dc.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-mentions',
  imports: [HeaderDCComponent, FooterComponent],
  templateUrl: './mentions.component.html',
  styleUrl: './mentions.component.css'
})
export class MentionsComponent {

}
