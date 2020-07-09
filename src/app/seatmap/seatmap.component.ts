import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ReservoneComponent } from '../reservone/reservone.component';
import { ReservtwoComponent } from '../reservtwo/reservtwo.component';
import { ReservthreeComponent } from '../reservthree/reservthree.component';

interface alf {
  value: string;
  viewValue: string;
}
interface num {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-seatmap',
  templateUrl: './seatmap.component.html',
  styleUrls: ['./seatmap.component.css']
})
export class SeatmapComponent implements OnInit {

    Row: num[] = [
        {value: '0', viewValue: '1'},
        {value: '1', viewValue: '2'},
        {value: '2', viewValue: '3'},
        {value: '3', viewValue: '4'},
        {value: '4', viewValue: '5'},
        {value: '5', viewValue: '6'},
        {value: '6', viewValue: '7'},
        {value: '7', viewValue: '8'},
        {value: '8', viewValue: '9'}
      ];
      Source: alf[] = [
        {value: '0', viewValue: 'P'},
    {value: '1', viewValue: 'Q'},
    {value: '2', viewValue: 'R'},
    {value: '3', viewValue: 'S'},
    {value: '4', viewValue: 'T'}
          ];
  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(ReservoneComponent);
  }
  openDialog1(){
    this.dialog.open(ReservtwoComponent);
  }
  openDialog2(){
    this.dialog.open(ReservthreeComponent);
  }
  ngOnInit(): void {
  }


}
