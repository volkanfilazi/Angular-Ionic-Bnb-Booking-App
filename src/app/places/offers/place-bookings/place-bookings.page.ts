import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-bookings',
  templateUrl: './place-bookings.page.html',
  styleUrls: ['./place-bookings.page.scss'],
})
export class PlaceBookingsPage implements OnInit {
  place?: Place;
  constructor(
    private router: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
     ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((mapp) => {
      const id = mapp.get('placeId')
  
        if (!id) {
          this.navController.navigateBack('/tabs/offers')
          return;
        }
        if (id) {
          this.placesService.getPlace(id).subscribe(place => {
            this.place = place;
          })
        }
    });
  }

  
}
