import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalProps } from '../../utils/types';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  newGroup: ModalProps = {
    nbGroups:0,
    name: "",
    isDWWM: false,
    age: false,
    skill: false
  }
createGroup(): void {
  if (
    this.newGroup.nbGroups !== null &&
    this.newGroup.nbGroups !== undefined &&
    this.newGroup.name.trim()
  ) {
    console.log(this.newGroup);
  } else {
    return alert('Veuillez remplir les 2 premiers champs');
  }
}
}
