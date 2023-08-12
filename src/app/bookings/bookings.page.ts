import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  allBookings: Booking [] = []
  allBookingsSub?: Subscription;
  constructor(
    private bookingService: BookingService,
    private alertCtrl: AlertController,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.allBookingsSub = this.bookingService.bookings.subscribe(book => {
      this.allBookings = book;
    })
  }

  ngOnDestroy(): void {
    if(this.allBookingsSub) {
      this.allBookingsSub.unsubscribe();
    }
  }



  onCancelBooking(bookingId: string, slidingBooking: IonItemSliding) {
    console.log(bookingId);
    slidingBooking.close()
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you realy want to delete the book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            if(bookingId){
              this.loadingController.create({
                message: 'Removing booking...'
              }).then(loadingEl => {
                loadingEl.present();
                this.bookingService.deleteBooking(bookingId).subscribe(() => {
                  loadingEl.dismiss();
                });
              });
            }
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }


}
