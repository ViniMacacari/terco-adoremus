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
export class TercoMisericordiaComponent {
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
  credo: string = `Creio em Deus Pai todo-poderoso, criador do céu e da terra;
    E em Jesus Cristo, seu único Filho, nosso Senhor;
    Que foi concebido pelo poder do Espírito Santo;
    Nasceu da Virgem Maria;
    Padeceu sob Pôncio Pilatos;
    Foi crucificado, morto e sepultado;
    Desceu à mansão dos mortos;
    Ressuscitou ao terceiro dia;
    Subiu aos céus;
    Está sentado à direita de Deus Pai todo-poderoso;
    Donde há de vir a julgar os vivos e os mortos.
    Creio no Espírito Santo;
    Na Santa Igreja Católica;
    Na comunhão dos santos;
    Na remissão dos pecados;
    Na ressurreição da carne;
    Na vida eterna.
    Amém.`
  dadosTerco: any[] = []
  misterioDesc: string = ''

  ngAfterViewInit(): void {

  }
}