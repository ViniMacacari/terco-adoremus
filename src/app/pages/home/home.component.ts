import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
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

  ngAfterViewInit(): void {
    ModalTercosComponent.show()
  }

  navegar(pagina: string): void {
    ModalTercosComponent.show()
    // this.router.navigate([pagina])
  }
}
