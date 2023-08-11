import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place?: Place;
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      if (!map.has('placeId')) {
        this.navCtrl.navigateBack('/tabs/offers')
        return;
      }
      if(map.has('placeId')){
        this.place = this.placesService.places.find(item => item.id === map.get('placeId'));
      }
      this.form = new FormGroup({
        title: new FormControl(this.place?.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place?.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        }),
        price: new FormControl(this.place?.price, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        dateFrom: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        dateTo: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      })
    });


  }
  onEdit() {
    if(!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
