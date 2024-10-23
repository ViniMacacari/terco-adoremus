import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TercoMarianoComponent } from './pages/terco-mariano/terco-mariano.component'
import { TercoMisericordiaComponent } from './pages/terco-misericordia/terco-misericordia.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'terco-mariano/:misterio', component: TercoMarianoComponent },
    { path: 'terco-da-misericordia', component: TercoMisericordiaComponent },
    { path: '**', redirectTo: '' }
]