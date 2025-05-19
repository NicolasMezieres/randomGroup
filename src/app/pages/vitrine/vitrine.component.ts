import { Component } from '@angular/core';
import { HeaderDCComponent } from "../../components/header-dc/header-dc.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-vitrine',
  imports: [HeaderDCComponent, FooterComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

}
