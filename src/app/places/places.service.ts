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
      'https://www.housedigest.com/img/gallery/the-best-celeb-owned-nyc-apartments/intro-1639672877.jpg',
      149.99,
      new Date('2023-01-01'),
      new Date('2023-12-12')
    ),
    new Place(
      'p2',
      'New York City',
      'In the heart of New York City',
      'https://thumbs.cityrealty.com/assets/smart/1004x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg',
      169.99,
      new Date('2023-01-01'),
      new Date('2023-12-12')
    ),
    new Place(
      'p3',
      'Chicago',
      'In the heart of Chicago',
      'https://i.ytimg.com/vi/HEVnJWV_eXA/maxresdefault.jpg',  
      179.99,
      new Date('2023-01-01'),
      new Date('2023-12-12')
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
