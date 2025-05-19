import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header-connected',
  imports: [MatIconModule],
  template: `<header
    class="bg-grey rounded-[20px] h-[50px] flex justify-center items-center gap-[50px] md:gap-[70px] mt-2.5 mx-[5px] shadow-[0_1px_4px_#21212170]"
  >
    <a href="/accueil"
      ><mat-icon aria-label="home icon" fontIcon="home"></mat-icon
    ></a>
    <a href="/profile"
      ><mat-icon aria-label="profil icon" fontIcon="person"></mat-icon
    ></a>
    <a href="/vitrine"
      ><mat-icon aria-label="logout icon" fontIcon="logout"></mat-icon
    ></a>
  </header> `,
})
export class ConnectedComponent {}
