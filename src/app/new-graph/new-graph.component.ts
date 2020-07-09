import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-graph',
  templateUrl: './new-graph.component.html',
  styleUrls: ['./new-graph.component.css']
})
export class NewGraphComponent implements OnInit {

  @Input() labels:string[];
  @Input() data;
  @Input() max;
  @Input() min;
  @Input() stepSize;
  @Input() xAxis;
  @Input() yAxis;
  @Input() graphType;

  constructor() {
    
   }

   lineChartOptions;
   lineChartLabels;
   lineChartType;
   lineChartLegend;
   lineChartData;
   lineChartColors ;
   
 
   ngOnInit() {
     this.lineChartOptions = {
       responsive: false,       
       legend: {                         
         display: false                // hide label form each dataset
       },
       elements: {
         line: {
             tension: 0.25 ,            // disables bezier curves
             fill: true,              // remove color underneath lines
             color:'white'
         }
       },
       scales: {
         xAxes: [{
           gridLines: {
             color: "rgba(0, 0, 0, 0)",  // hiding vertical lines
           },
           scaleLabel: {
             display: true,
             labelString: this.xAxis,
             color:'white'
            
           }
         }],
         yAxes: [{
           ticks: {
             max: this.max,
             min: this.min,
             stepSize: this.stepSize
           },
           scaleLabel: {
             display: true,
             labelString: this.yAxis,
             color:'white'
           }
         }]
       }
     };
     this.lineChartLabels = this.labels;
     this.lineChartType = 'line';
     this.lineChartData = [
       {
         borderColor: "#43b5b4",
         data: this.data,
         color:'white'
       }
     ];
 
     this.lineChartColors = []
     
     if(this.graphType === 'line'){
       this.lineChartColors.push(    {
         backgroundColor: 'rgba(240, 248, 255, 0.42)',
         borderColor: '#57c1bf',
         pointBackgroundColor: '#225d5c',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: '#ecf8f8'
       })
     }
     else{
       this.lineChartColors.push(    {
         backgroundColor: '#369190',
         borderColor: '#369190',
         pointBackgroundColor: '#369190',
         pointBorderColor: '#369190',
         pointHoverBackgroundColor: '#369190',
         pointHoverBorderColor: '#369190'
       })
     }
 
 
   }
   
 
 }
 