import { Booking } from './booking.model';


export class Room
{
    public favoriteClass : string = "text-primary"
    constructor(
        public booking : Booking,
        public from: Date,
        public to : Date,
        public Name : String,
        public Surname : String,

    ) {}

}
