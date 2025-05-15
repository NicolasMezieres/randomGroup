import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConnectedComponent } from '../../components/header/connected/connected.component';
import { ProfilsProps } from '../../utils/type';

@Component({
  selector: 'app-profils',
  imports: [ConnectedComponent, FooterComponent],
  templateUrl: './profils.component.html',
  styleUrl: './profils.component.css',
})
export class ProfilsComponent {
  user: ProfilsProps = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  ProfilsUser(): void {
    if (
      this.user.firstName.trim() &&
      this.user.lastName.trim() &&
      this.user.email.trim() &&
      this.user.password.trim()
    ) {
      localStorage.setItem('newUser', JSON.stringify(this.user));
      location.href = '../accueil';
    } else {
      return alert('Veuillez remplir tous les champs');
    }
  }
}
