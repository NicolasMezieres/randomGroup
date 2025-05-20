import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginProps } from '../../utils/type';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderDCComponent } from '../../components/header-dc/header-dc.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FooterComponent, HeaderDCComponent],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: LoginProps = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}
  users = JSON.parse(localStorage.getItem('users') || '');

  loginUser(): void {
    if (this.user.email.trim() && this.user.password.trim()) {
      if (
        this.user.email === this.users.email &&
        this.user.password === this.users.password
      ) {
        this.router.navigate(['accueil']);
      } else {
        alert('Identifiants invalides');
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
