import { ApplicationConfig } from '@angular/core'
import { provideRouter, RouterModule, withInMemoryScrolling } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { ɵLOTTIE_OPTIONS } from 'ngx-lottie'
import player from 'lottie-web'

import { routes } from './app.routes'
import { RestaurarPosicaoService } from './services/router/restaurar-posicao.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    provideHttpClient(),
    { provide: ɵLOTTIE_OPTIONS, useValue: { player: () => player } },
    RestaurarPosicaoService
  ]
}