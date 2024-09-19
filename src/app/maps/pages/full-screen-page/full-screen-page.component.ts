import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent  implements AfterViewInit{

  @ViewChild('map')
  public divMap?:ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El Elemento HTML no fue encontrado';

    const map = new Map({
      accessToken:
      'pk.eyJ1IjoiZG9vbWlzaCIsImEiOiJjbHhjOHJtemcwNGI2Mm9wcTlsem04eTdxIn0.U_aORYntisyI24QIX9ZcZg',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }



}
