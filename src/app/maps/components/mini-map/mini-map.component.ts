import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @Input()
  public lngLat?: [number,number];

  @ViewChild('map')
  public divMap?:ElementRef;

  public map?:Map;


  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement)  throw "Map Div not found";
    if(!this.lngLat) throw "Lnglat can't be null";

    this.map = new Map({
      accessToken:
      'pk.eyJ1IjoiZG9vbWlzaCIsImEiOiJjbHhjOHJtemcwNGI2Mm9wcTlsem04eTdxIn0.U_aORYntisyI24QIX9ZcZg',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,// starting position [lng, lat]
      zoom: 10, // starting zoom
      interactive:false,
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map)

  }



}
