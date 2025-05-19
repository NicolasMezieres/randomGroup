import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConnectedComponent } from '../../components/header/connected/connected.component';

@Component({
  selector: 'app-profils',
  imports: [ConnectedComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './profils.component.html',
  styleUrl: './profils.component.css',
})
export class ProfilsComponent {
  StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{16,}$/;
  first_nameRegx: RegExp = /^(?=[A-Z]*[A-Z])(?=[a-z]*[a-z]).{20,}$/;
  profileForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(this.first_nameRegx),
    ]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(this.StrongPasswordRegx),
      ],
    }),
  });

  get passwordFormField() {
    return this.profileForm.get('password');
  }
  get firstNameField() {
    return this.profileForm.get('first_name');
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
