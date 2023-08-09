import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace?: Place;
  constructor(private modalCntrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCntrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCntrl.dismiss({message: 'this is dummy message!'}, 'confirm');
  }

}
