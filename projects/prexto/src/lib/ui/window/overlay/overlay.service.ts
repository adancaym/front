import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  mensaje: string;
  constructor() {
    this.mensaje = null;
  }
}
