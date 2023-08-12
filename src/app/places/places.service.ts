import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { Offer } from './offer.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhatten Mansion',
      'In the heart of New York City',
      'https://www.housedigest.com/img/gallery/the-best-celeb-owned-nyc-apartments/intro-1639672877.jpg',
      149.99,
      new Date('2023-01-01'),
      new Date('2023-12-12'),
      'u1'
    ),
    new Place(
      'p2',
      'New York City',
      'In the heart of New York City',
      'https://thumbs.cityrealty.com/assets/smart/1004x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg',
      169.99,
      new Date('2023-01-01'),
      new Date('2023-12-12'),
      'u2'
    ),
    new Place(
      'p3',
      'Chicago',
      'In the heart of Chicago',
      'https://i.ytimg.com/vi/HEVnJWV_eXA/maxresdefault.jpg',
      179.99,
      new Date('2023-01-01'),
      new Date('2023-12-12'),
      'u2'
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }

  addPlace(title: string, description: string, price: number, availableFrom: Date, availableTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title, description,
      'https://i.ytimg.com/vi/HEVnJWV_eXA/maxresdefault.jpg',
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    );
    return this.places.pipe(take(1), delay(1000), tap(places => {
      this._places.next(places.concat(newPlace));
    }));
  }

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return places.find(p => p.id === id);
      })
    )
  }

  updatePlace(placeId: string | undefined, title: string, description: string) {
    return this.places.pipe(take(1),
      delay(1000),
      tap(places => {
        const updateOfferIndex = places.findIndex(p => p.id === placeId)
        const updatePlaces = [...places]
        const oldPlaces = updatePlaces[updateOfferIndex]
        updatePlaces[updateOfferIndex] = new Place(
          oldPlaces.id,
          title,
          description,
          oldPlaces.imageUrl,
          oldPlaces.price,
          oldPlaces.availableFrom,
          oldPlaces.availableTo,
          oldPlaces.userId
        );
        this._places.next(updatePlaces);
      })
    )
  }

  constructor(private authService: AuthService) { }
}
