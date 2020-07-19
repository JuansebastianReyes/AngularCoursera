import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: string[];
  constructor() { 
    this.destinos = ['Bogota','Medellin','Bucaramanga','Cali'];
  }

  ngOnInit(): void {
  }

}
