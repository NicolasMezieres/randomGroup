import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterProps } from '../../utils/type';
import { HeaderDCComponent } from '../../components/header-dc/header-dc.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    HeaderDCComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  styleUrl: './register.component.css',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
      ]),
    });
  }

  newUser: RegisterProps = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  users: RegisterProps[] = [];

  existingUsers: RegisterProps[] = JSON.parse(
    localStorage.getItem('users') || 'null'
  );

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.newUser = this.registerForm.value;

      if (this.existingUsers === null) {
        this.users.push(this.newUser);
        localStorage.setItem('users', JSON.stringify(this.newUser));
      } else {
        this.existingUsers.push(this.newUser);
      }
      alert('Formulaire validé ! Redirection vers connexion...');
      this.router.navigate(['login']);
    } else {
      return alert('Inscription invalide !');
    }
  }
}
