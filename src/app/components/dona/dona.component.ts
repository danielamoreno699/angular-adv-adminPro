import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {
  @Input() title : string = 'sin titulo';

  @Input('labels')doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
  @Input('type')doughnutChartType: ChartType = 'doughnut';
  @Input('option')chartOptions= {
    responsive: true,
    maintainAspectRatio: false,
}
  @Input('data')doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], 
    backgroundColor: ["#6857E6", "#009FEE", "#F02059"],
      
      }],
    }

  }



  //public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  
  //public doughnutChartData: ChartData<'doughnut'> = {
    //labels: this.doughnutChartLabels,
    //datasets: [
      //{ data: [ 350, 450, 100 ], 
        //backgroundColor: ["#6857E6", "#009FEE", "#F02059"],
      
     // },

      //this.data1.emit(this.doughnutChartData)
    //]

   
  //};
 // public doughnutChartType: ChartType = 'doughnut';

  //chartOptions = {
    //responsive: true,
    //maintainAspectRatio: false,

