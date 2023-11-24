import { HomeLocation } from '../homeLocation';
import { Component, Input } from '@angular/core';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrls: ['./home-location.component.css']
})
export class HomeLocationComponent {
  @Input() HomeLocation!: HomeLocation;
} 
