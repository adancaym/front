import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ine',
  templateUrl: './ine.component.html',
  styleUrls: ['./ine.component.css']
})
export class IneComponent implements OnInit {

  disabled = false;
  nombreDocumento= 'INE / IFE';
  accionPorHacer ='Cargar INE / IFE';
  accionRealizada = 'INE / IFE cargada';
  constructor() { }

  ngOnInit(): void {
  }

}
