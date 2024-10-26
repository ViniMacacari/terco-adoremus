import { Component, HostListener, ElementRef } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  aberto = false

  constructor(private router: Router, private el: ElementRef) { }

  navegar(pagina: string): void {
    this.fechar()
    this.router.navigate([pagina])
  }

  alternar(): void {
    const navbar = this.el.nativeElement.querySelector('#navbarResponsive')
    if (navbar.classList.contains('show')) {
      (window as any).bootstrap.Collapse.getInstance(navbar)?.hide() || new (window as any).bootstrap.Collapse(navbar).hide()
    } else {
      new (window as any).bootstrap.Collapse(navbar).show()
    }
  }

  fechar(): void {
    const navbar = this.el.nativeElement.querySelector('#navbarResponsive')
    if (navbar.classList.contains('show')) {
      (window as any).bootstrap.Collapse.getInstance(navbar)?.hide()
    }
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: Event) {
    const target = event.target as HTMLElement
    const clicouDentro = target.closest('.navbar')
    if (!clicouDentro) {
      this.fechar()
    }
  }
}