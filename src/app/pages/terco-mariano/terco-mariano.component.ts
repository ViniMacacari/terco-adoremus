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
  oferecimento: {
    portugues: string,
    latim: string
  } = {
      portugues: `"Divino Jesus, eu vos ofereço este terço que vou rezar,
            contemplando os mistérios da
            vossa Redenção.
            Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, a quem me dirijo, as graças necessárias para
            bem rezá-lo para ganhar as indulgências desta santa devoção."`,
      latim: 'Divine Iesu, tibi offero hoc Rosarium,in meditatione mysteriorum Redemptionis nostrae.Concede mihi, quaesumus,per intercessionem Beatissimae Virginis Mariae, Matris tuae,ad quam me converto,gratias necessarias ad illud digne recitandum,et indulgentias huius sanctae devotionis obtinendas.'
    }
  oracaoFatima: {
    portugues: string,
    latim: string
  } = {
      portugues: 'Ó meu bom Jesus,perdoai-nos, livrai-nos do fogo do inferno,levai as almas todas para o Céu,e socorrei principalmente as que mais precisarem da vossa misericórdia. Amém.',
      latim: 'O mi Iesu,dimitte nobis debita nostra,libera nos ab igne inferni,conduc in caelum omnes animas,praesertim illasquae misericordiae tuae maxime indigent. Amen.'
    }

  complementoFatimaOpcional: {
    portugues: string,
    latim: string
  } = {
      portugues: '(+ Opcional devocional) Abençoai o Santo Padre, o Papa,o nosso (Arce)Bispo (Dom) N. e todo o clero; socorrei as nossas famílias e as famílias do mundo inteiro. Amém.',
      latim: '(+ Opcional devocional) Benedic Sanctum Patrem, Papam,Episcopum nostrum N., et universum clerum; subveni familiis nostriset familiis totius mundi. Amen.'
    }

  opcionalSagradoCoracao: {
    portugues: string,
    latim: string
  } = {
      portugues: '(+ Opcional jaculatória) Ó Jesus, manso e humilde de coração, fazei o meu coração semelhante ao Vosso',
      latim: '(+ Opcional jaculatória) Iesu, mitis et humilis Corde, fac cor meum secundum Cor Tuum.'
    }

  opcionalIntercessao: {
    portugues: string,
    latim: string,
    santos: string[]
  } = {
      portugues: 'Rogai por nós',
      latim: 'Ora pro nobis',
      santos: [
        'São Bento',
        'São José',
        'Santa Maria Goretti',
        'Santa Teresinha do Menino Jesus',
        'Santo Antônio',
        'São Francisco de Assis',
        'São Padre Pio',
        'Santa Rita de Cássia',
        'São João Paulo II',
        'São Pio V',
        'São Pio X',
        'São Tomás de Aquino',
        'Santo Agostinho',
        'São Gregório Magno',
        'Santo Ambrósio',
        'Santa Mônica',
        'São Luís & Santa Zélia',
        'Santa Maria, Mãe de Deus (Mater Dei)',
        'São João Batista',
        'São Pedro',
        'São Paulo',
        'São Maximiliano Kolbe',
        'Santa Catarina de Sena',
        'Santa Joana d\'Arc',
        'São Carlo Acutis',
        'São Pier Giorgio Frassati',
        'São Padre Pio',
        'Santa(s) Perpétua & Felicidade'
      ]
    }
  santosAleatorios: string[] = []
  santosCache: Record<string, string[]> = {}

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

  sortearSantos(qtd: number): void {
    const lista = this.opcionalIntercessao.santos
    if (!lista || lista.length === 0) {
      this.santosAleatorios = []
      return
    }

    const max = Math.min(qtd, lista.length)
    const usados = new Set<number>()
    const selecionados: string[] = []

    while (selecionados.length < max) {
      const i = Math.floor(Math.random() * lista.length)
      if (usados.has(i)) continue
      usados.add(i)
      selecionados.push(lista[i])
    }

    this.santosAleatorios = selecionados
  }

  getSantos(item: any): string[] {
    const key = String(item.ordem_misterio ?? item.id ?? item.misterio)

    if (this.santosCache[key]) return this.santosCache[key]

    const lista = this.opcionalIntercessao.santos
    const max = Math.min(2, lista.length)
    const usados = new Set<number>()
    const selecionados: string[] = []

    while (selecionados.length < max) {
      const i = Math.floor(Math.random() * lista.length)
      if (usados.has(i)) continue
      usados.add(i)
      selecionados.push(lista[i])
    }

    this.santosCache[key] = selecionados
    return selecionados
  }
}
