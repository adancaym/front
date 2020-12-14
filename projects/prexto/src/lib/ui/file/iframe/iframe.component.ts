import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  constructor() { }
  @Input() url: string;
  ngOnInit(): void {
  }
  initVars(){}

}
