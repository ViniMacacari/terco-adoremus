import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
import { RequisicaoService } from '../../services/requisicao/requisicao.service'

@Component({
  selector: 'app-terco-amor',
  standalone: true,
  imports: [CommonModule, ModalLoadingComponent],
  templateUrl: './terco-amor.component.html',
  styleUrl: './terco-amor.component.scss'
})
export class TercoAmorComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private requisicao: RequisicaoService
  ) { }

  paiNosso: string = ''
  aveMaria: string = ''
  credo: string = ''
  gloria: string = ''
  doceCoracao: string = ''
  jaculatoria: string = ''
  sagradoCoracao: string = ''

  ngAfterViewInit(): void {
    this.carregarOracoes()
  }

  carregarOracoes(): void {
    ModalLoadingComponent.show()

    this.requisicao.get('oracoes/terco-amor')
      .subscribe((res: any) => {
        const oracoes = res.dados?.oracoes || []

        this.paiNosso = oracoes.find((o: any) => o.nome === 'Pai-Nosso')?.oracao || ''
        this.aveMaria = oracoes.find((o: any) => o.nome === 'Ave-Maria')?.oracao || ''
        this.credo = oracoes.find((o: any) => o.nome === 'Creio')?.oracao || ''
        this.gloria = oracoes.find((o: any) => o.nome === 'Glória')?.oracao || ''
        this.doceCoracao = oracoes.find((o: any) => o.nome === 'Doce Coração de Jesus, Doce Coração de Maria')?.oracao || ''
        this.jaculatoria = oracoes.find((o: any) => o.nome === 'Jaculatória pela Salvação das Almas')?.oracao || ''
        this.sagradoCoracao = oracoes.find((o: any) => o.nome === 'Sagrado Coração de Jesus')?.oracao || ''

        ModalLoadingComponent.hide()
      }, (error: any) => {
        ModalLoadingComponent.hide()
        this.router.navigate(['/'])
      })
  }
}