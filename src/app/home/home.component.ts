
import { HousingService } from './../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { HomeLocation } from '../homeLocation'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  homeLocationList: HomeLocation[] = [];
  filteredLocationList: HomeLocation[] = [];

  

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.getAllHomeLocation();
    this.getAllUsers();
  }

  //get all home location

  getAllHomeLocation(): void{
    this.housingService.getHomeLocation().subscribe(
      data => {
        this.homeLocationList = data;
        this.filteredLocationList = data;
        console.log(data);
        
      }
     
    )
  }

  getAllUsers(): void{
    this.housingService.getUser().subscribe(
      response => {
        console.log(response);
      }
    )
  }

  //filtered location by name,city and state

  filteredResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.homeLocationList;
      console.log(text)
    } else {
      this.filteredLocationList = this.homeLocationList.filter((homeLocation) => {
        return (
          homeLocation?.city?.toLowerCase().includes(text.toLowerCase()) ||
          homeLocation?.name?.toLowerCase().includes(text.toLowerCase()) ||
          homeLocation?.state?.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
  }
}

