import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginProps } from '../../utils/types';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: LoginProps = {
    email: '',
    password: '',
  };

  JWT = JSON.parse(localStorage.getItem('newUser') || '');
  loginUser(): void {
    if (this.user.email.trim() && this.user.password.trim()) {
      if (
        this.user.email === this.JWT.email &&
        this.user.password === this.JWT.password
      ) {
        alert('Connected !');
        console.log(this.user);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
