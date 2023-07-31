import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offerList?: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.offerList = this.placesService.places;
  }

}
