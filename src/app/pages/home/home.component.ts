import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router: Router
  ) { }

  navegar(pagina: string): void {
    ModalLoadingComponent.show()
    // this.router.navigate([pagina])
  }
}
