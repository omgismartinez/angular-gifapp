import { Component } from '@angular/core';
import { GisfsService } from '../services/gisfs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this.gisfsService.resultados
  }
  constructor( private gisfsService: GisfsService) { }


}
