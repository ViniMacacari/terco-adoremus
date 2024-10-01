import { Component } from '@angular/core';

@Component({
  selector: 'app-terco-mariano',
  standalone: true,
  imports: [],
  templateUrl: './terco-mariano.component.html',
  styleUrl: './terco-mariano.component.scss'
})
export class TercoMarianoComponent {

  misterio: string = 'Glorioso'
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
  primeiroMisterio: string = ''
  segundoMisterio: string = ''
  terceiroMisterio: string = ''
  quartoMisterio: string = ''
  quintoMisterio: string = ''
}