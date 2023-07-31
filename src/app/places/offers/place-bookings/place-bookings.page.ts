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
    private placeService: PlacesService
     ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((map) => {
      if (!map.has('placeId')) {
        this.navController.navigateBack('/tabs/offers')
        return;
      }
      if(map.has('placeId')){
        console.log(this.place);
        
        console.log(map.has('placeId'));
        
        this.place = this.placeService.places.find(item => item.id === map.get('placeId'));
      }
    });
  }
}
