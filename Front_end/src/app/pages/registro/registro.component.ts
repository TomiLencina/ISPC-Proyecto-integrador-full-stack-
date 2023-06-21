import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApirequestService } from 'src/app/services/apirequest.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  confirmPass!: string;
  registryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registryForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(4)]],
      confirmPassword: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      nationality: ["", [Validators.required]],
      username: ["", [Validators.required]],
    });
  }

  compare() {
    if (this.registryForm.controls['password'].value != this.confirmPass) {
      this.registryForm.controls['confirmPassword'].setErrors({ 'incorrect': true });
    }
  }

  get Email() {
    return this.registryForm.get("email");
  }

  get Password() {
    return this.registryForm.get("password");
  }

  get ConfirmPassword() {
    return this.registryForm.get("confirmPassword");
  }

  get Nationality() {
    return this.registryForm.get("nationality");
  }

  get Username() {
    return this.registryForm.get("username");
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registryForm.valid) {
      const formData = {
        username: this.registryForm.value.username,
        nationality: this.registryForm.value.nationality,
        email: this.registryForm.value.email,
        password: this.registryForm.value.password
      };

      this.userService.sendFormData(formData)
        .subscribe(
          (response: any) => {
            console.log(response);
          },
          (error: any) => {
          }
        );
    } else {

      this.registryForm.markAllAsTouched();
    }
  }
}
