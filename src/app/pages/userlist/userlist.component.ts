import { Component,OnInit,inject } from '@angular/core';
import { APIResponsemodel, User } from '../../model/users';
import { MasterService } from '../../service/master.service';
import { UpperCasePipe } from '@angular/common';
import { NavComponent } from '../../shared/nav/nav.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [UpperCasePipe,NavComponent,SidebarComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  
  masterService=inject(MasterService)
  
  userList:User[]=[]
  ngOnInit(): void {
    this.loadUser();
  }

  

    loadUser(){
      this.masterService.listusers().subscribe((res:APIResponsemodel)=>{
        this.userList=res.data
      })
    }



}
