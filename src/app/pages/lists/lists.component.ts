import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListProps } from '../../utils/type';

@Component({
  selector: 'app-lists',
  imports: [RouterOutlet, ConnectedComponent, FooterComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
})
export class ListsComponent {
  newStudent: ListProps = {
    name: '',
    gender: '',
    frLevel: 0,
    isDWWM: false,
    techLevel: 0,
  };
  students: ListProps[] = [
    { name: 'Joe', gender: 'H', frLevel: 1, isDWWM: true, techLevel: 2 },
  ];
}
