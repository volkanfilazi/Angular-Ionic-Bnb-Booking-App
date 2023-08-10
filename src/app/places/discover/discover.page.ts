import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces?: Place[];
  placesList: Place[] = []

  constructor(
    private placesService: PlacesService) { }

  ngOnInit() {
    this.placesList = this.placesService.places
  }

  onFilterUpdate(event: any) {
    console.log(event.detail);
    
  }

  ionViewDidLeave() {
    console.log("did leave");  
  }

}
