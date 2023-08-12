import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  placesList: Place[] = []
  copyPlacelist: Place[] = []
  placeslistSub?: Subscription;

  constructor(
    private placesService: PlacesService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.placeslistSub = this.placesService.places.subscribe(places => {
      this.placesList = places;
    })
    this.copyPlacelist = this.placesList;
  }

  ngOnDestroy(): void {
    if(this.placeslistSub) {
      this.placeslistSub?.unsubscribe();
    }
  }

  onFilterUpdate(event: any) {
    if(event.detail.value === 'all') {
      console.log("all");
      
      this.copyPlacelist = this.placesList
    }else {
      console.log("not all");
      this.copyPlacelist = this.placesList.filter(user => user.userId !== this.authService.userId)
    }

  }

  ionViewDidLeave() {
    console.log("did leave");
  }

}
