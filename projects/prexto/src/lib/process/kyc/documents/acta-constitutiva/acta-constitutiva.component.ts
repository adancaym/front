import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-acta-constitutiva',
  templateUrl: './acta-constitutiva.component.html',
  styleUrls: ['./acta-constitutiva.component.css']
})
export class ActaConstitutivaComponent implements OnInit {

  disabled = false;
  nombreDocumento = 'Acta constitutiva';
  accionPorHacer =  'Adjuntar acta constitutiva';
  accionRealizada = 'Acta constitutiva adjuntada';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.disabled = !this.disabled;
  }

}
