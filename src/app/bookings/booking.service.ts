import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";

@Injectable({ providedIn: 'root'})
export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            userId: 'u1',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 2
        },
        {
            id: 'abc',
            placeId: 'p2',
            userId: 'u2',
            placeTitle: 'Manhattan Mansion2',
            guestNumber: 3
        }
    ]

    get bookings() {
        return [...this._bookings];
    }

    deleteBooking(selectedBookingId: string) {
        this._bookings = this._bookings.filter(item => item.id !== selectedBookingId);
    }
}