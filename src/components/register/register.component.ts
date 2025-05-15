import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  styleUrl: './register.component.css',
  template: `
    <main class="h-[90vh] flex flex-col w-full justify-center items-center">
      <h1 class="text-xl">Inscription</h1>
      <form
        action="submit"
        class="h-fit bg-[#EFE9E7] w-[80%] sm:w-[400px] rounded-xl p-8 flex flex-col justify-evenly items-center mt-10  shadow-sm shadow-black border-1 border-slate-200"
      >
        <div class="w-full h-fit p-1">
          <label for="nom" class="underline">Nom :</label>
          <input
            required
            type="text"
            name="nom"
            id="lastName"
            class="bg-white rounded-md p-2 text-center w-full  shadow-sm shadow-black placeholder-gray-300"
            placeholder="Nom..."
          />
        </div>
        <div class="w-full h-fit p-1">
          <label for="prénom" class="underline">Prénom :</label>
          <input
            required
            type="text"
            name="prénom"
            id=""
            class="bg-white rounded-md p-2 text-center w-full  shadow-sm shadow-black placeholder-gray-300"
            placeholder="Prénom..."
          />
        </div>
        <div class="w-full h-fit p-1">
          <label for="email" class="underline">Email :</label>
          <input
            required
            type="email"
            name="email"
            id=""
            class="bg-white rounded-md p-2 text-center w-full  shadow-sm shadow-black placeholder-gray-300"
            placeholder="Email..."
          />
        </div>
        <div class="w-full h-fit p-1">
          <label for="mot de passe" class="underline">Mot de passe :</label>
          <input
            required
            type="text"
            name="mot de passe"
            id=""
            class="bg-white rounded-md p-2 text-center w-full  shadow-sm shadow-black placeholder-gray-300"
            placeholder="Mot de passe..."
          />
        </div>
        <button
          type="submit"
          class="bg-white w-full  shadow-sm shadow-black mt-10 rounded-md p-2 sm:hidden"
        >
          Inscription
        </button>
      </form>
      <button
        type="submit"
        class="bg-white w-full sm:w-[300px] shadow-sm shadow-black mt-10 rounded-md p-2 hidden sm:flex items-center justify-center"
        id="submitBtn"
      >
        Inscription
      </button>
    </main>
  `,
})
export class RegisterComponent {
  lastName = document.querySelector('#lastName');
  submitBtn = document.querySelector('#submitBtn');
}
