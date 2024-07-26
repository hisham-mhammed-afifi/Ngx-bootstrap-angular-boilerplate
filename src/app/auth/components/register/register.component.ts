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
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  submitting = false;

  // services
  authBackendService = inject(AuthBackendService);

  constructor() {
    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  register() {
    this.submitting = true;
    const { name, email, password } = this.registerForm.value;
    this.authBackendService.register({ name, email, password }).subscribe({
      next: () => {
        this.submitting = false;
      },
    });
  }
}
