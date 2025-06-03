import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';


@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [NavComponent,SidebarComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  

}
