import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  showHeader = true;
  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }
  title = 'Minha Listinha';
}
