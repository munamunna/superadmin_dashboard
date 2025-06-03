import { CommonModule } from '@angular/common';
import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { APIResponsemodel, User } from '../../model/users';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit {
  masterService=inject(MasterService)
  userObj:User=new User();
  userForm: FormGroup;
  message: string = '';
  isSuccess: boolean | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  

  createUser() {
    if (this.userForm.valid) {
      this.masterService.registernewUser(this.userForm.value).subscribe(
        (res: APIResponsemodel) => {
          if (res.result) {
            alert("user created successfully")
            console.log(res.data)
          } else {
            alert(res.message)
          }
        }
       
      );
    } 
  }
  


}