import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ModalTercosComponent } from '../modal-tercos/modal-tercos.component'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(
    private router: Router
  ) { }

  navegar(url: string): void {
    this.router.navigate([url])
  }

  tercoMariano(): void {
    ModalTercosComponent.show()
  }
}
