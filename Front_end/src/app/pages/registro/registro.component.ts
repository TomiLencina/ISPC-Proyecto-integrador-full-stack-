import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  user: string = '';
  nacionality: string = '';
  email: string = '';
  password1: string = '';
  password2: string = '';

  constructor(private userService: UserService) {}

  updateUser(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.user = inputValue;
  }
  updateNacionality(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.nacionality = inputValue;
  }
  updateEmail(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.email = inputValue;
  }
  updatePassword1(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.password1 = inputValue;
  }
  updatePassword2(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.password2 = inputValue;
  }

  onSubmit() {
    const jsonData = {
      user: this.user,
      nacionality: this.nacionality,
      email: this.email,
      password: this.password1,
      password2: this.password2,
    };
    this.userService
      .createUser(
        jsonData.user,
        jsonData.nacionality,
        jsonData.email,
        jsonData.password,
        jsonData.password2
      )
      .subscribe(
        (response) => {
          console.log('El usuario ha sido creado exitosamente.');
          console.log('Respuesta del servicio:', response);
        },
        (error) => {
          console.error('Ha ocurrido un error al crear el usuario.');
          console.error('Error:', error);
        }
      );
  }
}
