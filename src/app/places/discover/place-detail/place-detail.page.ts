import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place?:Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
    ) { }

    ngOnInit() {
      this.route.paramMap.subscribe((map) => {
        if (!map.has('placeId')) {
          this.navCtrl.navigateBack('/tabs/discover')
          return;
        }
        if(map.has('placeId')){
          this.place = this.placesService.places.find(item => item.id === map.get('placeId'));
        }
      });
    }

  onBookPlace() {
    this.navCtrl.navigateBack('/tabs/discover');
  }
}
