import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
import { RequisicaoService } from '../../services/requisicao/requisicao.service'

@Component({
  selector: 'app-terco-mariano',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terco-mariano.component.html',
  styleUrl: './terco-mariano.component.scss'
})
export class TercoMarianoComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private requisicao: RequisicaoService
  ) { }

  misterio: string | null = ''
  dadosTerco: any[] = []
  misterioDesc: string = ''
  frequencia: string = ''
  paiNosso: string = ''
  paiNossoLatim: string = ''
  aveMaria: string = ''
  aveMariaLatim: string = ''
  credo: string = ''
  credoLatim: string = ''
  gloria: string = ''
  gloriaLatim: string = ''
  salveRainha: string = ''
  salveRainhaLatim: string = ''
  encerramentoTerco: string = ''
  encerramentoTercoLatim: string = ''
  idioma: string = 'pt'

  async ngAfterViewInit(): Promise<void> {
    this.misterio = this.route.snapshot.paramMap.get('misterio')
    this.cdr.detectChanges()
    await this.carregarDados()
  }

  async carregarDados(): Promise<void> {
    ModalLoadingComponent.show()

    this.requisicao.get('rosario/misterios')
      .subscribe((response: any) => {
        const misterios = response.dados?.misterios || []
        const oracoes = response.dados?.oracoes || []

        const grupo = misterios.filter((m: any) => m.id_terco == this.misterio)

        if (grupo.length === 0) {
          ModalLoadingComponent.hide()
          this.router.navigate(['/'])
          return
        }

        this.dadosTerco = grupo
        this.misterioDesc = grupo[0].terco
        this.frequencia = grupo[0].dias_terco

        this.paiNosso = oracoes.find((o: any) => o.nome === 'Pai-Nosso')?.oracao || ''
        this.paiNossoLatim = oracoes.find((o: any) => o.nome === 'Pai-Nosso')?.oracao_latim || ''
        this.aveMaria = oracoes.find((o: any) => o.nome === 'Ave-Maria')?.oracao || ''
        this.aveMariaLatim = oracoes.find((o: any) => o.nome === 'Ave-Maria')?.oracao_latim || ''
        this.credo = oracoes.find((o: any) => o.nome === 'Creio')?.oracao || ''
        this.credoLatim = oracoes.find((o: any) => o.nome === 'Creio')?.oracao_latim || ''
        this.gloria = oracoes.find((o: any) => o.nome === 'Glória')?.oracao || ''
        this.gloriaLatim = oracoes.find((o: any) => o.nome === 'Glória')?.oracao_latim || ''
        this.salveRainha = oracoes.find((o: any) => o.nome === 'Salve Rainha')?.oracao || ''
        this.salveRainhaLatim = oracoes.find((o: any) => o.nome === 'Salve Rainha')?.oracao_latim || ''
        this.encerramentoTerco = oracoes.find((o: any) => o.nome === 'Encerramento do Terço')?.oracao || ''
        this.encerramentoTercoLatim = oracoes.find((o: any) => o.nome === 'Encerramento do Terço')?.oracao_latim || ''

        ModalLoadingComponent.hide()
      }, (error: any) => {
        ModalLoadingComponent.hide()
        this.router.navigate(['/'])
        console.error(error)
      })
  }

  defIdioma(i: string) {
    this.idioma = i
  }
}