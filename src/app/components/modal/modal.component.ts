import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalProps } from '../../utils/type';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  groups: ModalProps[] = [];
  listStudent = JSON.parse(localStorage.getItem('listStudent') || '');
  ngOnInit() {
    console.log(this.listStudent);
  }
  newGroup: ModalProps = {
    nbGroups: 0,
    name: '',
    isDWWM: false,
    age: false,
    skill: false,
    students: ([] = this.listStudent),
  };

  createGroup(): void {
    if (
      this.newGroup.nbGroups !== null &&
      this.newGroup.nbGroups !== undefined &&
      this.newGroup.nbGroups !== 0 &&
      this.newGroup.name.trim()
    ) {
      this.groups.push(this.newGroup);

      localStorage.setItem('groups', JSON.stringify(this.groups));
      console.log('group added to local storage');
    } else {
      return alert('Veuillez remplir les 2 premiers champs');
    }
  }
}
