import { Component, OnInit } from '@angular/core';
import { ReservtwoComponent } from '../reservtwo/reservtwo.component';
import { ReservthreeComponent } from '../reservthree/reservthree.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog1(){
    this.dialog.open(ReservtwoComponent);
  }
  openDialog2(){
    this.dialog.open(ReservthreeComponent);
  }
  ngOnInit(): void {
  }

}
