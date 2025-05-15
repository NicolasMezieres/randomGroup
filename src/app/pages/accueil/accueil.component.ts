import { Component } from '@angular/core';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { MatButtonModule } from '@angular/material/button';
import { listType } from '../../utils/type';
@Component({
  selector: 'app-accueil',
  imports: [ConnectedComponent, MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  lists: listType[] = [
    { name: 'test', personNbr: 2, tryNbr: 2 },
    { name: 'briefRandom', personNbr: 30, tryNbr: 0 },
  ];
}
