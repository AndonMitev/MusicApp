import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Register } from '../../../core/services/auth/register.service';
import { RegisterInputModel } from '../../../core/models/input-models/register.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public userModel: RegisterInputModel;
  constructor(private fb: FormBuilder, private userSerivce: Register) {}

  public ngOnInit(): void {
    this.initializeRegisterForm();
  }

  public initializeRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['stoner', Validators.required],
      password: ['stoner', Validators.required],
      confirmPassword: ['stoner', Validators.required],
      email: ['stoner', Validators.required],
      confirmEmail: ['stoner', Validators.required]
    });
  }

  public handleOnSubmit(): void {
    let userData = this.registerForm.value;
    delete userData['confirmPassword'];
    delete userData['confirmEmail'];
    this.userSerivce
      .registerUser(userData)
      .subscribe(res => console.log(res), err => console.log(err));
  }

  public get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  public get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  public get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  public get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  public get confirmEmail(): AbstractControl {
    return this.registerForm.get('confirmEmail');
  }
}
