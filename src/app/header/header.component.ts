import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navigateToLogin(): void {
    this.router.navigate(['login']);
  }
  navigateToCreateAccount(): void {
    this.router.navigate(['newUser']);
  }
  navigateToCreateList(): void {
    this.router.navigate(['newList']);
  }
  navigateToHome(): void {
    this.router.navigate(['home']);
  }
  navigateToViewList(): void {
    this.router.navigate(['ViwList']);
  }
}
