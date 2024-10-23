import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ModalLoadingComponent } from '../../components/modal-loading/modal-loading.component'
import { RequisicaoService } from '../../services/requisicao/requisicao.service'

@Component({
  selector: 'app-terco-mariano',
  standalone: true,
  imports: [CommonModule, ModalLoadingComponent],
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
  frequencia: string = 'quarta e domingo'
  paiNosso: string = `Pai nosso, que estais nos céus,
    Santificado seja o vosso nome;
    Venha a nós o vosso reino;
    Faça-se a vossa vontade,
    Assim na terra como no céu.
    O pão nosso de cada dia nos dai hoje;
    Perdoai-nos as nossas ofensas,
    Assim como nós perdoamos a quem nos tem ofendido;
    E não nos deixeis cair em tentação,
    Mas livrai-nos do mal.
    Amém`
  aveMaria: string = `Ave Maria, cheia de graça,
    o Senhor é convosco;
    bendita sois vós entre as mulheres
    e bendito é o fruto do vosso ventre, Jesus.
    Santa Maria, Mãe de Deus,
    rogai por nós, pecadores,
    agora e na hora de nossa morte.
    Amém`
  dadosTerco: any[] = []
  misterioDesc: string = ''

  ngAfterViewInit(): void {
    this.misterio = this.route.snapshot.paramMap.get('misterio')

    this.cdr.detectChanges()

    ModalLoadingComponent.show()

    this.requisicao.get('santo-terco/buscar/terco-mariano')
      .subscribe((response: any) => {
        const terco = response.filter((item: any) => item.id_terco == this.misterio)

        if (terco) {
          this.dadosTerco = terco
          this.misterioDesc = terco[0].terco
          ModalLoadingComponent.hide()
        } else {
          this.router.navigate(['/'])
        }
      }, (error: any) => {
        console.error(error)
      })
  }
}