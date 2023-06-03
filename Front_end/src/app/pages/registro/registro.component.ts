import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      nacionality: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required,Validators.minLength(6)]],
      password2: ['', Validators.required]
    });
  }

  get user() {
    return this.registrationForm.get('user')?.invalid && this.registrationForm.get('user')?.touched;
  }

  get nacionality() {
    return this.registrationForm.get('nacionality')?.invalid && this.registrationForm.get('nacionality')?.touched;
  }

  get email() {
    return this.registrationForm.get('email')?.invalid && this.registrationForm.get('email')?.touched;
  }

  get password1() {
    return this.registrationForm.get('password1')?.invalid && this.registrationForm.get('password1')?.touched;
  }

  get password2() {
    return this.registrationForm.get('password2')?.invalid && this.registrationForm.get('password2')?.touched;
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return
    } 
     console.log(this.registrationForm.value);

  }
}