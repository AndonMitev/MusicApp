import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Login } from '../../../core/services/auth/login.service';
import { LoginInputModel } from '../../../core/models/input-models/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private loginModel: LoginInputModel;

  constructor(private fb: FormBuilder, private userService: Login) {}

  public ngOnInit(): void {
    this.initializeLoginForm();
  }

  public initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['stoner', Validators.required],
      password: ['stoner', Validators.required]
    });
  }

  public submitLoginForm(): void {
    const userData = this.loginForm.value;
    this.loginModel = new LoginInputModel(
      userData['username'],
      userData['password']
    );
    this.userService
      .loginUser(this.loginModel)
      .subscribe(res => {
        this.userService.saveUserData(res);
      });
  }

  public get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
