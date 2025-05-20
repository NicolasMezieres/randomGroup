import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterProps } from '../../utils/type';
import { ErrorMsgComponent } from '../../components/error-msg/error-msg.component';
import { NgIf } from '@angular/common';
import { HeaderDCComponent } from '../../components/header-dc/header-dc.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ErrorMsgComponent, NgIf, HeaderDCComponent, FooterComponent],
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
  users: RegisterProps[] = [];
  showError: boolean = false

  createUser(): void {
    if (
      this.newUser.firstName.trim() &&
      this.newUser.lastName.trim() &&
      this.newUser.email.trim() &&
      this.newUser.password.trim()
    ) {
      this.users.push(this.newUser);
      localStorage.setItem('users', JSON.stringify(this.newUser));
      location.href = '../login';
    } else {
      return alert('Veuillez remplir tous les champs');
    }
  }
}
