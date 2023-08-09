import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offerList?: Place[];

  constructor(
    private placesService: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.offerList = this.placesService.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'tabs', 'offers', 'edit', offerId]);
    console.log("offerId", offerId);
    
  }
}
