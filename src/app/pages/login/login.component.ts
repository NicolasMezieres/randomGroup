import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginProps, RegisterProps } from '../../utils/type';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderDCComponent } from '../../components/header-dc/header-dc.component';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    FooterComponent,
    HeaderDCComponent,
    ReactiveFormsModule,
  ],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
      ]),
    });
  }
  activateUser: LoginProps = {
    email: '',
    password: '',
  };

  users = JSON.parse(localStorage.getItem('users') || 'null');

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.activateUser = this.loginForm.value;
      if (
        this.activateUser.email === this.users.email &&
        this.activateUser.password === this.users.password
      ) {
        alert("Connecté ! Redirection vers l'accueil...");
        this.router.navigate(['accueil']);
      } else {
        alert('Identifiants invalides');
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
