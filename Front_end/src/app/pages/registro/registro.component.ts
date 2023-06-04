import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {

    confirmPass!: string
    registryForm: FormGroup

    constructor(private formBuilder: FormBuilder) {
    
        this.registryForm = this.formBuilder.group(
            {
                password: ["", [Validators.required, Validators.minLength(4)]],
                confirmPassword: ["", [Validators.required]],
                email: ["", [Validators.required, Validators.email]],
                nationality: ["", [Validators.required]],
                username: ["", [Validators.required]],
            }
        )


    }

    compare() {
        
        if (this.registryForm.controls['password'].value != this.confirmPass) {

            this.registryForm.controls['confirmPassword'].setErrors({ 'incorrect': true });
        }

    }

    get Email() {
        return this.registryForm.get("email")
    }

    get Password() {
        return this.registryForm.get("password")
    }

    get ConfirmPassword() {
        return this.registryForm.get("confirmPassword")
    }

    get Nationality() {
        return this.registryForm.get("nationality")
    }

    get Username() {
        return this.registryForm.get("username")
    }

    onSubmit(event: Event){
        event.preventDefault();
        if (this.registryForm.valid){
        
            //Make the request with formdata
            
        }else{

            //Validate fields 
            this.registryForm.markAllAsTouched()
        }
        
    }

}
