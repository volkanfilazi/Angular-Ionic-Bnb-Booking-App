import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhatten Mansion',
      'In the heart of New York City',
      'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      149.99
    ),
    new Place(
      'p2',
      'Manhatten Mansion2',
      'In the heart of New York City',
      'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      169.99
    ),
    new Place(
      'p3',
      'Manhatten Mansion3',
      'In the heart of New York City',
      'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      179.99
    ),
  ];

  private _offers: Offer[] = [
    new Offer(
      'o1',
      'volkan',
      130.10
    ),
    new Offer(
      'o2',
      'volkan2',
      134.10
    )
  ]

  get places() {
    return [...this._places];
  }

  testMethod(){
    console.log("test"); 
  }

  getPlace(id: string) {
    return this._places.find(p => p.id === id);
  }

  get offers() {
    return [...this._offers];
  }
  constructor() {}
}
