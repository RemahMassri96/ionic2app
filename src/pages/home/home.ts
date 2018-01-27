import { place } from './../../model/place.model';
import { PlacePage } from './../place/place';
import { placesService } from './../../services/places.services';
import { NewPlacePage } from './../new-place/new-place';
import { Component } from '@angular/core';
import { NavController ,NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places:{title:string}[]=[];


  constructor(
    public navCtrl: NavController,
    private placesService:placesService,
    private modalCtrl: ModalController) { }

  ionViewWillEnter(){
    this.placesService.getPlaces()
    .then(
      (places) => this.places = places
    );
  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlacePage);
  }


  onOpenPlace(place:place){
    this.modalCtrl.create(PlacePage,place).present();

  }
 

}
