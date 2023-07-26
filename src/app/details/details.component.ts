import { HousingService } from './../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { HomeLocation } from './../homeLocation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  homeLocation: any;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) { }

  ngOnInit(): void {
    const homeId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHomeLocationById(homeId).subscribe(
      (homeLocation: HomeLocation) => {
        this.homeLocation = homeLocation;
      },
      (err: any) => console.log(err)
    );
  }

}
