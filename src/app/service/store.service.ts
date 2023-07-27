import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  personsChanged = new Subject<string[]>();
  personList: string[] = ['volkan','erhan'];

  createPerson(name: string){
    this.personList.push(name)
    this.personsChanged.next(this.personList)
  }

  deletePerson(name: string){
    this.personList = this.personList.filter((person) => {
      return person !== name
    })
    this.personsChanged.next(this.personList)
  }
}
