import { HomeLocation } from '../homeLocation';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrls: ['./home-location.component.css']
})
export class HomeLocationComponent {
  @Input() HomeLocation!: HomeLocation;
}
