import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";
import { BehaviorSubject, take, map, tap, delay } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root'})
export class BookingService {
    private _bookings = new BehaviorSubject<Booking[]>([])

    get bookings() {
        return this._bookings.asObservable();
    }

    deleteBooking(selectedBookingId: string) {  
        return this._bookings.pipe(take(1),delay(1000), tap(item => {
            this._bookings.next(item.filter(b => b.id !== selectedBookingId))
        }))
    }

    addBooking(
        placeId: string,
        placeTitle: string,
        placeimage: string,
        firstName: string,
        lastName: string,
        guestNumber: number,
        dateFrom: Date,
        dateTo: Date
    ) {
        const newBooking = new Booking(
            Math.random().toString(),
            placeId,
            this.authservice.userId,
            placeTitle,
            placeimage,
            firstName,
            lastName,
            guestNumber,
            dateFrom,
            dateTo
        );
        return this.bookings.pipe(take(1), delay(1000), tap(addBook => {
            this._bookings.next(addBook.concat(newBooking));
        }))
    }

    constructor(private authservice: AuthService) {}
}