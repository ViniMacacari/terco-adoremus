import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

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

  constructor() {
    ModalTercosComponent.instance = this
  }

  static show() {
    ModalTercosComponent.instance.isLoading = true
  }

  static hide() {
    ModalTercosComponent.instance.isLoading = false
  }
}
