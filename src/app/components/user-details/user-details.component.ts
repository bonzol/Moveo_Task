import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {


  user = new User();
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = NaN;
  lng = NaN;
  
  constructor() { }
  
  ngOnInit(): void {
    
    this.user= JSON.parse(sessionStorage.user);

    this.lat = this.user.lat;
    this.lng = this.user.lng;

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [this.lng, this.lat]

  });
  
  const marker1 = new mapboxgl.Marker()
.setLngLat([this.lng, this.lat])
.addTo(this.map);

  this.map.addControl(
    new mapboxgl.NavigationControl()
    );
    
  }
  
  
  
  
}

