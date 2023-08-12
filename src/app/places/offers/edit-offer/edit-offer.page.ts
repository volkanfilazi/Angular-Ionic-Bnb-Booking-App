import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place?: Place;
  form!: FormGroup;
  placeSub?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private LoadingController: LoadingController
  ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      this.route.paramMap.subscribe((mapp) => {
        const id = mapp.get('placeId')
        
        if (!id) {
          this.navCtrl.navigateBack('/tabs/offers')
          return;
        }
        if (id) {
          this.placeSub = this.placesService.getPlace(id).subscribe(place => {
            this.place = place;
            
            this.form = new FormGroup({
              title: new FormControl(this.place?.title, {
                updateOn: 'blur',
                validators: [Validators.required]
              }),
              description: new FormControl(this.place?.description, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]
              }),
            })
          })
        }
      });
    });  
  }

  ngOnDestroy(): void {
    if(this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

  onEdit() {
    if(!this.form.valid) {
      return;
    }
    this.LoadingController.create({
      message: 'Updating Place...'
    }).then(loadingEl => {
      loadingEl.present();
      this.placesService.updatePlace(
        this.place?.id,
        this.form.value.title,
        this.form.value.description
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/tabs/offers'])
      });
    })
  }

}
