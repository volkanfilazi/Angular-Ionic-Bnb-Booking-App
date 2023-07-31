import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicTestPageRoutingModule } from './ionic-test-routing.module';

import { IonicTestPage } from './ionic-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTestPageRoutingModule
  ],
  declarations: [IonicTestPage]
})
export class IonicTestPageModule {}
