import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { apiEndpoints } from 'src/constant/apiEndpoints';


@Component({
  selector: 'app-share-train-location',
  templateUrl: './share-train-location.component.html',
  styleUrls: ['./share-train-location.component.css']
})
export class ShareTrainLocationComponent implements OnInit {

  private map: any;
  private centroid: L.LatLngExpression = [42.3601, -71.0589];
  private marker: L.Marker<any> = L.marker([42.3601, -71.0589]);
  private circle: L.Circle<any> = L.circle([42.3601, -71.0589], { radius: 5 });
  private latitude: any;
  private longitude: any;
  private accuracy: any;
  private response: any = {};
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    if (!navigator.geolocation) {
      console.log("Your browser doesn't support geolocation feature!")
    } else {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(this.getPosition)
        this.updateTrainLocation();
      }, 10000);
    }
  }

  constructor(private http: HttpClient) {
  }

  seeData=()=>{
    console.log("see from data",this.response);
    this.updateTrainLocation();
  }
  ngOnInit(): void {
    this.getTrainLocation();
    this.initMap();
    L.Icon.Default.imagePath = "assets/leaflet/";
  }

  getTrainLocation = async () => {

    var TrainInputId = parseInt((<HTMLInputElement>document.getElementById("TrainId")).value);
    console.log("train id change", TrainInputId);
    if (Number.isNaN(TrainInputId)) {
      alert("Please select shared location train");
    }
    else {
      await this.http.get(apiEndpoints.LocationApi.LocationByTrainId + TrainInputId)
        .subscribe(res => {
          this.response = { ...res };
        });
    }
  }

  

  updateTrainLocation = (): any => {
    var trainLocation = {
      Id: this.response.value.id,
      TrainId: this.response.value.trainId,
      CountryId: this.response.value.countryId,
      Latitude: this.latitude,
      Longitude: this.longitude,
      Accuracy: this.accuracy,
      MacAddress: this.response.value.macAddress,
      CreatedAt: this.response.value.createdAt
    };
    
    console.log("yyyyyyyyyyyyyyyy", trainLocation);
    this.http.put(apiEndpoints.LocationApi.Location, trainLocation)
      .subscribe((res) => {
        console.log("res from api", res);
      });
  }

  onShareTrainLocatopn = (trainLocation: any): any => {
    console.log(trainLocation.countryId);
    console.log(trainLocation.trainId);
    trainLocation["TrainId"] = parseInt(trainLocation["TrainId"]);
    trainLocation["CountryId"] = parseInt(trainLocation["CountryId"]);
    trainLocation["Latitude"] = this.latitude;
    trainLocation["Longitude"] = this.longitude;
    trainLocation["Accuracy"] = this.accuracy;

    this.http.post(apiEndpoints.LocationApi.Location, trainLocation)
      .subscribe((res) => {
        this.response = { ...res };
      });
  }
  getPosition = (position: any): any => {
    // console.log(position)
    this.latitude = position.coords.latitude
    this.longitude = position.coords.longitude
    this.accuracy = position.coords.accuracy

    if (this.marker) {
      this.map.removeLayer(this.marker)
    }

    if (this.circle) {
      this.map.removeLayer(this.circle)
    }

    this.marker = L.marker([this.latitude, this.longitude])
    this.circle = L.circle([this.latitude, this.longitude], { radius: this.accuracy })

    var featureGroup = L.featureGroup([this.marker, this.circle]).addTo(this.map)

    this.map.fitBounds(featureGroup.getBounds())

    console.log("Your coordinate is: this.latitude: " + this.latitude + " this.longitude: " + this.longitude + " Accuracy: " + this.accuracy)
  }


}
