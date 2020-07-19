import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destinoviaje',
  templateUrl: './destinoviaje.component.html',
  styleUrls: ['./destinoviaje.component.css']
})
export class DestinoviajeComponent implements OnInit {
  @Input() nombre: string;
  constructor() { }

  ngOnInit(): void {
  }

}
