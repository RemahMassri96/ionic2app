import { NavController } from 'ionic-angular';
import { placesService } from './../../services/places.services';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
location:{lat:number,lng:number}={lat:0,lng:0};

  constructor(private placesService:placesService,private navCtrl:NavController,private geolocation: Geolocation) {}

  onAddPlace(value:{title:string}){
    this.placesService.addPlace({title:value.title,location:this.location});
    this.navCtrl.pop();
  }
  

  onLocateUser(){
    Geolocation.getCurrentPosition()
    .then(
      (location) =>{
        console.log('location featced suceessfuly');
        this.location.lat=location.coords.latitude;
        this.location.lng=location.coords.longitude;
      }
    )
    .catch(
      (error) => console.log('An Erorr Occured!')

    );

   

  }

  

}
