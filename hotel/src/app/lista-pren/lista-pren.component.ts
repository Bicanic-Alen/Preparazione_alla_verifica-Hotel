import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {

  @Input() listaStanze:Room[];
  mostraLista : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  hideList()
  {
    this.mostraLista = !this.mostraLista;
  }

}
