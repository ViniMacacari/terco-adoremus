import { Injectable } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { ViewportScroller } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class RestaurarPosicaoService {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0])
      }
    })
  }
}
