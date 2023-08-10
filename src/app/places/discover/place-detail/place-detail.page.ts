import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

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
    private placesService: PlacesService,
    private modalCntrl: ModalController,
    private actionSheetCntrl: ActionSheetController
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
    this.actionSheetCntrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    })  
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    if(mode === 'select') {
      this.modalCntrl.create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place}
      }).then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      }).then(resultData => {
        console.log(resultData.data, resultData.role);
        if(resultData.role === 'confirm') {
          console.log('booked!');     
        }
      })
    }
    
  }
}
