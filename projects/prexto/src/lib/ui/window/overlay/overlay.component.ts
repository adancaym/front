import {Component, Input, OnInit} from '@angular/core';
import {OverlayService} from './overlay.service';

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.sass']
})
export class OverlayComponent implements OnInit {

  @Input() mensaje: string;
  constructor(public overlay: OverlayService) {
    if (this.mensaje == null) {
      this.mensaje = overlay.mensaje;
    }
  }
  ngOnInit(): void {
  }
}
