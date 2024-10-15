import { Component } from '@angular/core'
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

  constructor() {
    ModalLoadingComponent.instance = this
  }

  static show() {
    ModalLoadingComponent.instance.isLoading = true
  }

  static hide() {
    ModalLoadingComponent.instance.isLoading = false
  }
}