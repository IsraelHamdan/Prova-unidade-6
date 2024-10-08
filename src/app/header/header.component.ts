import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule, MatExpansionModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  private widthSubject = new BehaviorSubject<number>(window.innerWidth);
  private heightSubject = new BehaviorSubject<number>(window.innerHeight);
  public width$: Observable<number> = this.widthSubject.asObservable();
  public height$: Observable<number> = this.heightSubject.asObservable();
  constructor(private router: Router) {
    this.updateSize();
    window.addEventListener('resize', () => this.updateSize());
  }

  private updateSize() {
    this.widthSubject.next(window.innerWidth);
    this.heightSubject.next(window.innerHeight);
  }
  navigateToRoute(route: string): void {
    if (route == 'newList') {
      console.log(`Recebi ${route} mas não consigo redirecionar`);
    }
    switch (route) {
      case 'newList': {
        this.router.navigate([route]);
        break;
      }
      case 'viewList': {
        this.router.navigate([route]);
        break;
      }
      default: {
        this.router.navigate(['/home']);
      }
    }
  }

  readonly panelOpenState = signal(false);

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.updateSize());
  }
}
