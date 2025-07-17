import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
import { RequisicaoService } from '../../services/requisicao/requisicao.service'

@Component({
  selector: 'app-terco-misericordia',
  standalone: true,
  imports: [CommonModule, ModalLoadingComponent],
  templateUrl: './terco-misericordia.component.html',
  styleUrl: './terco-misericordia.component.scss'
})
export class TercoMisericordiaComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private requisicao: RequisicaoService
  ) { }

  paiNosso: string = ''
  aveMaria: string = ''
  credo: string = ''
  eternoPai: string = ''
  jaculatoria: string = ''
  gloria: string = ''
  oracaoTrinitaria: string = ''
  oracaoConfianca: string = ''

  ngAfterViewInit(): void {
    this.carregarOracoes()
  }

  carregarOracoes(): void {
    ModalLoadingComponent.show()

    this.requisicao.get('oracoes/terco-misericordia')
      .subscribe((res: any) => {
        const oracoes = res.dados?.oracoes || []

        this.paiNosso = oracoes.find((o: any) => o.nome === 'Pai-Nosso')?.oracao || ''
        this.aveMaria = oracoes.find((o: any) => o.nome === 'Ave-Maria')?.oracao || ''
        this.credo = oracoes.find((o: any) => o.nome === 'Creio')?.oracao || ''
        this.gloria = oracoes.find((o: any) => o.nome === 'Glória')?.oracao || ''
        this.eternoPai = oracoes.find((o: any) => o.nome === 'Eterno Pai')?.oracao || ''
        this.jaculatoria = oracoes.find((o: any) => o.nome === 'Jaculatória da Misericórdia')?.oracao || ''
        this.oracaoTrinitaria = oracoes.find((o: any) => o.nome === 'Oração Trinitária')?.oracao || ''
        this.oracaoConfianca = oracoes.find((o: any) => o.nome === 'Oração de Confiança à Divina Misericórdia')?.oracao || ''

        ModalLoadingComponent.hide()
      }, (error: any) => {
        ModalLoadingComponent.hide()
        console.error(error)
        this.router.navigate(['/'])
      })
  }
}