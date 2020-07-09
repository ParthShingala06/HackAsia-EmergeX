import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  disableSelect = new FormControl(false);
  Source: City[] = [
    {value: '0', viewValue: 'Mumbai, India'},
    {value: '1', viewValue: 'Victoria City, HongKong'},
    {value: '2', viewValue: 'Singapore'},
    {value: '3', viewValue: 'Tokyo, Japan'},
    {value: '4', viewValue: 'San Francisco, USA'},
    {value: '5', viewValue: 'Washington DC, USA'},
    {value: '6', viewValue: 'Paris, France'},
    {value: '7', viewValue: 'London, England'},
    {value: '8', viewValue: 'Barcelona, Spain'},
    {value: '9', viewValue: 'Monte Carlo, Monaco'}
      ];
      Destination: City[] = [
        {value: '0', viewValue: 'Mumbai, India'},
        {value: '1', viewValue: 'Victoria City, HongKong'},
        {value: '2', viewValue: 'Singapore'},
        {value: '3', viewValue: 'Tokyo, Japan'},
        {value: '4', viewValue: 'San Francisco, USA'},
        {value: '5', viewValue: 'Washington DC, USA'},
        {value: '6', viewValue: 'Paris, France'},
        {value: '7', viewValue: 'London, England'},
        {value: '8', viewValue: 'Barcelona, Spain'},
        {value: '9', viewValue: 'Monte Carlo, Monaco'}
          ];
  constructor() { }

  ngOnInit(): void {
  }

}
