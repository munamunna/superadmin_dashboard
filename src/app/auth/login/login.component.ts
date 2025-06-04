import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log(credentials);

      this.http.post<any>('http://localhost:8000/api/token/', credentials, { headers: { 'Content-Type': 'application/json' } }).subscribe({
        next: (response) => {
          // Save token/role to localStorage
          localStorage.setItem('accesstoken', response.access || '');
          localStorage.setItem('role', response.role || 'user');

          // Redirect based on role
          if (response.role === 'admin') {
            this.router.navigate(['/admindashboard']);
          } else {
            this.router.navigate(['/list-product']);
          }
        },
        error: (err) => {
          this.errorMessage = 'Invalid credentials or server error.';
        }
      });
    }
  }

}
