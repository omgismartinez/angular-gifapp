import { Component, ElementRef, ViewChild } from '@angular/core';
import { GisfsService } from '../services/gisfs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GisfsService) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }

}
