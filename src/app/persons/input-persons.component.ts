import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from '../service/store.service';
@Component({
  selector: 'app-input-persons',
  templateUrl: './input-persons.component.html',
})
export class InputPersonsComponent {
  inputValue = ''

  constructor(private storeService: StoreService){}

  createNewPerson(){
    this.storeService.createPerson(this.inputValue)
  }

  
}
