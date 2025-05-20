import { Component } from '@angular/core';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { MatButtonModule } from '@angular/material/button';
import { listType, studentType } from '../../utils/type';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-accueil',
  imports: [
    ConnectedComponent,
    MatButtonModule,
    FooterComponent,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  listStudentProposition: string[] = [];
  isSubmit: boolean = false;
  isCreateList: boolean = false;
  isShowLists: boolean = true;
  choiceStudent: String = '';
  listStudent: studentType[] = [];
  lists: listType[] = [
    { name: 'test', personNbr: 2, tryNbr: 2 },
    { name: 'briefRandom', personNbr: 30, tryNbr: 0 },
  ];
  studentForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(49),
    ]),
    gender: new FormControl('', [Validators.required]),
    levelFrench: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(4),
    ]),
    hasDWWM: new FormControl(false, [Validators.required]),
    levelTech: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(4),
    ]),
    profile: new FormControl('', [Validators.required]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(99),
    ]),
  });
  nameList: String = '';
  handleCreateList(e: Event) {
    e.preventDefault();
    this.isCreateList = true;
  }
  changeShowLists(value: boolean) {
    this.isShowLists = value;
  }
  updateNameList(e: Event) {
    this.nameList = (e.target as HTMLInputElement).value;
  }
  updateChoiceStudent(e: Event) {
    this.choiceStudent = (e.target as HTMLInputElement).value;
    //quand on aura le back parce que pas de temps à perdre la dessus
    this.listStudentProposition = [];
  }
  updateListStudent(e: Event) {
    e.preventDefault();
  }
  updateNameStudent(e: Event) {
    this.studentForm.value.name = (e.target as HTMLInputElement).value;
  }
  updateGenderStudent(e: Event) {
    this.studentForm.value.gender = (e.target as HTMLInputElement).value;
  }
  updateLevelFrenchStudent(e: Event) {
    this.studentForm.value.levelFrench = Number(
      (e.target as HTMLInputElement).value
    );
  }
  updateHasDWWMStudent(e: Event) {
    this.studentForm.value.hasDWWM = Boolean(
      (e.target as HTMLInputElement).checked
    );
  }
  updateLevelTechStudent(e: Event) {
    this.studentForm.value.levelTech = Number(
      (e.target as HTMLInputElement).value
    );
  }
  updateProfileStudent(e: Event) {
    this.studentForm.value.profile = (e.target as HTMLInputElement).value;
  }
  updateAgeStudent(e: Event) {
    this.studentForm.value.age = Number((e.target as HTMLInputElement).value);
  }
  addStudentList(e: Event) {
    e.preventDefault();
    this.isSubmit = true;
    if (!this.studentForm.invalid) {
      const listStudent = localStorage.getItem('listStudent');

      const arrayStudent: studentType[] = listStudent
        ? JSON.parse(listStudent)
        : [];

      const newStudent = this.studentForm.value as studentType;
      arrayStudent.push(newStudent);
      console.log(arrayStudent);

      // const data = JSON.stringify(this.studentForm.value);
      // if (dataStudent) {
      //   arrayStudent.push(data);
      // }
      // this.listStudent.push(this.studentForm.value as studentType);
      // arrayStudent.push(data);

      window.localStorage.setItem('listStudent', JSON.stringify(arrayStudent));
      this.studentForm.reset();
      this.isSubmit = false;
    }
  }
  goToLists(): void {
    location.href = '/lists';
  }
}
//todo reste plus qu'à faire la recherche par étudiant ainsi que l'affichage des étudiants dans la liste et puis validé la liste
