import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-modal-tercos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-tercos.component.html',
  styleUrl: './modal-tercos.component.scss'
})
export class ModalTercosComponent {
  static instance: ModalTercosComponent

  isLoading = false

  constructor(
    private router: Router
  ) {
    ModalTercosComponent.instance = this
  }

  static show() {
    ModalTercosComponent.instance.isLoading = true
  }

  static hide() {
    ModalTercosComponent.instance.isLoading = false
  }

  redirecionar(rota: string): void {
    this.router.navigate([rota])

    this.isLoading = false
  }
}