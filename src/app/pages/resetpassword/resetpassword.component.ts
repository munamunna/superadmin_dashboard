;
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {


  emailForm: FormGroup;
  resetForm: FormGroup;
  otpSent = false;
  message = '';
  email = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetForm = this.fb.group({
      otp: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  sendOtp() {
    if (this.emailForm.invalid) return;
    const email = this.emailForm.value.email;
    this.http.post<any>('http://localhost:8000/api/send-otp/', { email }).subscribe({
      next: (res) => {
        this.message = res.message;
        this.email = email;
        this.otpSent = true;
      },
      error: (err) => {
        this.message = err.error.error || 'Failed to send OTP';
      }
    });
  }






  resetPassword() {
    if (this.resetForm.invalid) return;
    const data = {
      email: this.email,
      otp: this.resetForm.value.otp,
      new_password: this.resetForm.value.new_password
    };
    this.http.post<any>('http://localhost:8000/api/reset-password/', data).subscribe({
      next: (res) => {
        this.message = res.message;
        this.otpSent = false;
        this.resetForm.reset();
      },
      error: (err) => {
        this.message = err.error.error || 'Reset failed';
      }
    });
  }

}
