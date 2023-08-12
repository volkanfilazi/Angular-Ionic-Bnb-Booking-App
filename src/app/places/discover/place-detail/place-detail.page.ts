import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/bookings/booking.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place?: Place;
  placeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCntrl: ModalController,
    private actionSheetCntrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingController: LoadingController
  ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe((mapp) => {
      const id = mapp.get('placeId')
      
      if (!id) {
        this.navCtrl.navigateBack('/tabs/discover')
        return;
      }
      if (id) {
        this.placeSub = this.placesService.getPlace(id).subscribe(place => {
          this.place = place;
        })
      }
    });
  }
  
  ngOnDestroy(): void {
    if(this.placeSub) {
      this.placeSub?.unsubscribe();
    }
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
        // {
        //   text: 'Random Date',
        //   handler: () => {
        //     this.openBookingModal('random')
        //   }
        // },
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
    this.modalCntrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place, selectedMode: mode }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        this.loadingController.create({
          message: 'Creating new booking...'
        }).then(loadingEl => {
          loadingEl.present();
          const data = resultData.data.BookingData;
          this.bookingService.addBooking(
            this.place!.id, 
            this.place!.title, 
            this.place!.description,
            data.firstName,
            data.lastName,
            data.guestNumber,
            data.dateFrom,
            data.dateTo).subscribe(() => {
              loadingEl.dismiss();
              this.router.navigate(['/tabs/bookings'])
            })
        })
      }
    })

  }
}
