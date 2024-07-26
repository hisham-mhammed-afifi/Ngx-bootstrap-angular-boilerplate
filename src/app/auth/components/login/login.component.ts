import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthBackendService } from '../../services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  remember = new FormControl(false);
  submitting = false;

  // services
  authBackendService = inject(AuthBackendService);

  constructor() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
      remember: this.remember,
    });
  }

  login() {
    this.submitting = true;
    const { email, password, remember } = this.loginForm.value;
    this.authBackendService.login({ email, password }).subscribe({
      next: () => {
        this.submitting = false;
      },
    });
  }
}
