import { Component } from '@angular/core'
import { LottieComponent } from 'ngx-lottie'
import { Router } from '@angular/router'

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  options = {
    path: '../../../assets/animations/maria.json' // caminho para seu arquivo JSON
  }

  constructor(
    private router: Router
  ) { }

  redirecionar(url: string): void {
    this.router.navigate([url])
  }
}