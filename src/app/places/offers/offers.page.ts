import { Component, OnDestroy, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offerList?: Place[];
  private placesSub?: Subscription

  constructor(
    private placesService: PlacesService,
    private router: Router
  ) { }


  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.offerList = places;
    });
  }

  ngOnDestroy(): void {
    if(this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'tabs', 'offers', 'edit', offerId]);
    console.log("offerId", offerId);

  }
}
