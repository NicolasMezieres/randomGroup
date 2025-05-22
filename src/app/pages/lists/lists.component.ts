import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListProps, studentType } from '../../utils/type';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-lists',
  imports: [
    RouterOutlet,
    ConnectedComponent,
    FooterComponent,
    MatIconModule,
    ModalComponent,
  ],
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

  listStudent: studentType[] = JSON.parse(
    localStorage.getItem('listStudent') || ''
  );

  deleteStudent(index: number): void {
    this.listStudent.splice(index, 1);
  }

  isShowModal = false;
  showModal() {
    this.isShowModal = true;
  }
}
