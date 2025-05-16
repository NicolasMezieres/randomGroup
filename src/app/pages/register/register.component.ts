import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterProps } from '../../utils/types';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  styleUrl: './register.component.css',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  newUser: RegisterProps = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  createUser(): void {
    if (
      this.newUser.firstName.trim() &&
      this.newUser.lastName.trim() &&
      this.newUser.email.trim() &&
      this.newUser.password.trim()
    ) {
      localStorage.setItem('newUser', JSON.stringify(this.newUser));
      location.href = '../login';
    } else {
      return alert('Veuillez remplir tous les champs');
    }
  }
}
