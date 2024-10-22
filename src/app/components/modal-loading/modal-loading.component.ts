import { Component, Renderer2 } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-modal-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-loading.component.html',
  styleUrl: './modal-loading.component.scss'
})
export class ModalLoadingComponent {
  static instance: ModalLoadingComponent
  isLoading = false

  constructor(private renderer: Renderer2) {
    ModalLoadingComponent.instance = this
  }

  static show() {
    ModalLoadingComponent.instance.isLoading = true
    ModalLoadingComponent.instance.renderer.setStyle(document.body, 'overflow', 'hidden')
  }

  static hide() {
    ModalLoadingComponent.instance.isLoading = false
    ModalLoadingComponent.instance.renderer.removeStyle(document.body, 'overflow')
  }
}