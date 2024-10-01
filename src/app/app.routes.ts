import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TercoMarianoComponent } from './pages/terco-mariano/terco-mariano.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'terco-mariano', component: TercoMarianoComponent },
    { path: '**', redirectTo: '' }
]