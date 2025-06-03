import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  @ViewChild('toggleBtn') toggleBtn!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;

  ngAfterViewInit(): void {
    this.toggleBtn.nativeElement.addEventListener('click', () => {
      this.sidebar.nativeElement.classList.toggle('collapsed');

      const icon = this.toggleBtn.nativeElement.querySelector('i');
      icon.classList.toggle('bi-arrow-left-circle');
      icon.classList.toggle('bi-arrow-right-circle');
    });
  }
}
