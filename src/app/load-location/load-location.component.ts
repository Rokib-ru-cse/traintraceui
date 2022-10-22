import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-load-location',
  templateUrl: './load-location.component.html',
  styleUrls: ['./load-location.component.css']
})
export class LoadLocationComponent implements OnInit {

  private map: any;
  private centroid: L.LatLngExpression = [42.3601, -71.0589];
  private marker: L.Marker<any> = L.marker([42.3601, -71.0589]);
  private circle: L.Circle<any> = L.circle([42.3601, -71.0589], { radius: 5 });
  private latitude:any;
  private longitude:any;
  private accuracy:any;
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

  }
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
