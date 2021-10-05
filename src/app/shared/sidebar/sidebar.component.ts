import { Component } from '@angular/core';
import { GisfsService } from '../../gifs/services/gisfs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  busqueda( busqueda: string ) {
    console.log( busqueda );
    this.gifsService.buscarGifs(busqueda);
  }


  
  constructor( private gifsService: GisfsService ) { }
  
}

