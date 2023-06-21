import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  token: any

  constructor(private formBuilder: FormBuilder, private login: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    let credentials: any = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value

    }
    if (this.loginForm.valid) {
      this.token = this.login.getToken(credentials).subscribe(
        {
          next: ((token:any) => {
            let accessToken = token.access;
            localStorage.setItem("accessToken", accessToken);
            this.router.navigate(["/cartera"])
            

          }),
          error: ((error) => {
            console.log(error);
          })
        }
    )}
  }
}
