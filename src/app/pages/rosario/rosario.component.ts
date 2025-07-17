import { Component, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
import { RequisicaoService } from '../../services/requisicao/requisicao.service'

@Component({
  selector: 'app-rosario',
  standalone: true,
  imports: [CommonModule, ModalLoadingComponent],
  templateUrl: './rosario.component.html',
  styleUrl: './rosario.component.scss'
})
export class RosarioComponent implements AfterViewInit {
  dadosTerco: any[] = []
  misterioDesc: string = ''
  encerramentoTerco: string = ''
  salveRainha: string = ''
  gloria: string = ''
  credo: string = ''
  paiNosso: string = ''
  aveMaria: string = ''

  constructor(
    private router: Router,
    private requisicao: RequisicaoService
  ) { }

  async ngAfterViewInit(): Promise<void> {
    await this.carregarMisterios()
  }

  async carregarMisterios(): Promise<void> {
    ModalLoadingComponent.show()

    this.requisicao.get('rosario/misterios').subscribe({
      next: (response: any) => {
        const dados = response?.dados

        if (!dados?.misterios?.length || !dados?.oracoes?.length) {
          this.router.navigate(['/'])
          return
        }

        this.dadosTerco = dados.misterios
        this.misterioDesc = dados.misterios[0]?.terco ?? ''

        const buscar = (nome: string) =>
          dados.oracoes.find((o: any) => o.nome.toLowerCase().includes(nome.toLowerCase()))?.oracao ?? ''

        this.credo = buscar('creio')
        this.paiNosso = buscar('pai-nosso')
        this.aveMaria = buscar('ave-maria')
        this.gloria = buscar('glória')
        this.salveRainha = buscar('salve rainha')
        this.encerramentoTerco = buscar('encerramento')

        ModalLoadingComponent.hide()
      },
      error: (err) => {
        ModalLoadingComponent.hide()
        this.router.navigate(['/'])
        console.error(err)
      }
    })
  }

  agruparPorTerco(dados: any[]): any[] {
    const grupos: { [key: string]: { terco: string, misterios: any[] } } = {}

    for (const item of dados) {
      const terco = item.terco
      if (!grupos[terco]) grupos[terco] = { terco, misterios: [] }
      grupos[terco].misterios.push(item)
    }

    return Object.values(grupos)
  }
}