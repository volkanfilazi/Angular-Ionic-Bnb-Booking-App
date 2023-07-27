import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../service/store.service';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = []
  private personListSubs: Subscription = new Subscription;

  constructor(private storeService: StoreService){}

  ngOnInit(){
    this.personList = this.storeService.personList
    this.personListSubs = this.storeService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  deleteAPerson(name: string){
    this.storeService.deletePerson(name)
  }

  ngOnDestroy(){
    this.personListSubs.unsubscribe();
  }
}
