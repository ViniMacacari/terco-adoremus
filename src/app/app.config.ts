import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { ɵLOTTIE_OPTIONS } from 'ngx-lottie'
import player from 'lottie-web'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: ɵLOTTIE_OPTIONS, useValue: { player: () => player } }
  ]
}