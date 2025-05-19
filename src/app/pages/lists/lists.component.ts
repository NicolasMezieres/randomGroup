import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListProps } from '../../utils/type';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-lists',
  imports: [RouterOutlet, ConnectedComponent, FooterComponent, MatIconModule],
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
    age: 0,
  };
  students: ListProps[] = [
    {
      name: 'Joe',
      gender: 'H',
      frLevel: 1,
      isDWWM: true,
      techLevel: 2,
      age: 20,
    },
    {
      name: 'Momo',
      gender: 'H',
      frLevel: 1,
      isDWWM: true,
      techLevel: 2,
      age: 20,
    },
    {
      name: 'Toto',
      gender: 'H',
      frLevel: 1,
      isDWWM: true,
      techLevel: 2,
      age: 20,
    },
  ];

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }
}
