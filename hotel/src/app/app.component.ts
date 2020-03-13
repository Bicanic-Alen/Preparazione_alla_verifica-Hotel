import { Component } from '@angular/core';
import { Prenotazioni } from './prenotazioni.model';
import { Booking } from './booking.model';
import { Room } from './room.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption : string;
  title = 'BOOKING';
  Booking = Prenotazioni;
  selectedRoom: Booking = Prenotazioni[0];
  roomList: Room[];
  obsRoom : Observable<Room[]>;

  constructor(public  http: HttpClient) {

  }

ngOnInit() {
    this.roomList = new Array <Room>();
    this.obsRoom = this.http.get<Room[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
    this.obsRoom.subscribe(this.getRooms);
  }

   getRooms = (data : Room[]) =>
  {
    this.roomList = data;
  }

  onClick(f: HTMLInputElement  ,t : HTMLInputElement, n: HTMLInputElement, s:HTMLInputElement ) : boolean
  {
    this.selectedRoom = Prenotazioni.find((booking: Booking) => booking.name == this.selectedOption);
    this.roomList.push(new Room(this.selectedRoom, new Date(f.value), new Date(t.value), String(n.value), String(s.value)));

    f.value ="";
    t.value ="";
    n.value="";
    s.value="";

    this.selectedOption = undefined;
    return false;
  }

   onChange()
  {
    this.selectedRoom = Prenotazioni.find((booking: Booking) => booking.name == this.selectedOption);
  }

}
