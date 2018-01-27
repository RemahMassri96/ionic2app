import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat:number;
  lng:number;
  


  constructor( private viewCtrl:ViewController,private NavParams:NavParams) {
    this.lat = this.NavParams.data.location.lat;
    this.lng = this.NavParams.data.location.lng;

  }


  onDismiss(){
    this.viewCtrl.dismiss();


  }

 
}
