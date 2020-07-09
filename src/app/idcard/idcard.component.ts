import { Component, OnInit } from '@angular/core';
import { ReservoneComponent } from '../reservone/reservone.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(ReservoneComponent);
  }
  ngOnInit(): void {
  }

}
