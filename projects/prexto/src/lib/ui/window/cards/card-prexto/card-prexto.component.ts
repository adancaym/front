import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-card-prexto',
  templateUrl: './card-prexto.component.html',
  styleUrls: ['./card-prexto.component.css']
})
export class CardPrextoComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() title: string;
  @Input() thumbnail: string;
  @Input() action: string;
  @Input() actionToDo: string;
  constructor() {}
  initVars(){
    if (!this.disabled){
      this.disabled = false;
    }
    if (!this.title){
      this.title = 'Se te olvido ponerle el titulo';
    }
    if (!this.action){
      this.action = 'Se te olvido ponerle la accion';
    }
    if (!this.actionToDo){
      this.actionToDo = 'Se te olvido ponerle la accion por hacer';
    }
  }

  ngOnInit(): void {
    this.initVars();
  }

}
