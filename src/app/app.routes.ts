import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'

import { TercoMarianoComponent } from './pages/terco-mariano/terco-mariano.component'
import { TercoMisericordiaComponent } from './pages/terco-misericordia/terco-misericordia.component'
import { TercoAmorComponent } from './pages/terco-amor/terco-amor.component'

import { RosarioComponent } from './pages/rosario/rosario.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'rosario', component: RosarioComponent },

    { path: 'terco-mariano/:misterio', component: TercoMarianoComponent },
    { path: 'terco-da-misericordia', component: TercoMisericordiaComponent },
    { path: 'terco-do-amor', component: TercoAmorComponent },
    { path: '**', redirectTo: '' }
]