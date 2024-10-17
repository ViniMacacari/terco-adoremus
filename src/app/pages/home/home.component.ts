import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ModalTercosComponent } from '../../components/modal-tercos/modal-tercos.component'

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

  tercoMariano(): void {
    ModalTercosComponent.show()
  }

  navegar(pagina: string): void {
    this.router.navigate([pagina])
  }
}
