import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  @Input() url: string;
  constructor() { }

  ngOnInit(): void {
  }

}
