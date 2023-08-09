import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { AlertController, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  allBookings?: Booking [];
  constructor(
    private bookingService: BookingService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.allBookings = this.bookingService.bookings;
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
              this.bookingService.deleteBooking(bookingId);
              this.allBookings = this.bookingService.bookings;
            }
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }


}
