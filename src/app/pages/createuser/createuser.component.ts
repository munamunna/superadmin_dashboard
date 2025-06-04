import { CommonModule } from '@angular/common';
import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { APIResponsemodel, User } from '../../model/users';
import { NavComponent } from '../../shared/nav/nav.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NavComponent,SidebarComponent],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit {
  
  masterService=inject(MasterService)
  router=inject(Router)
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
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/admindashboard']);
            });
            
          } else {
            alert(res.message)
          }
        }
       
      );
    } 
  }
  


}