import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from 'src/app/core/http/api.service';
import { LoginService } from '../login.service';

@Component({
    selector: 'wl-sign-up-page',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

    constructor(
        private loginService: LoginService,
        private apiService: ApiService) { }

    ngOnInit(): void {
    }
    public username: string;

    public password: string;

    public emailAddress: string;

    public get canLogin(): boolean {
        return this.usernameFormControl.valid
            && this.passwordFormControl.valid;
    }

    createUser = () => {
        const body = {
            'username': this.username,
            'password': this.password,
            'email_address': this.emailAddress
        }
        this.apiService.createUser(body).subscribe(
            success => this.handleSuccess(success),
            error => this.handleError(error)
        )
    }

    private handleSuccess(success){
        console.log(success)
        console.log(success.session_id)
        this.loginService.sessionId = success.session_id
    }

    private handleError(error){
        console.error(error.error)
    }

    matcher = new MyErrorStateMatcher();

    passwordFormControl = new FormControl('', [
        Validators.required
    ]);
    usernameFormControl = new FormControl('', [
        Validators.required
    ]);
    emailAddressFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}