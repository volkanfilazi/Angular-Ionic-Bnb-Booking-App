import { Injectable } from '@angular/core';
import { Place } from './place.model';

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

  get places() {
    return [...this._places];
  }

  constructor() {}
}
