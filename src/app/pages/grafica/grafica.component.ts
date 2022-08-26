import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {

  titulo: string= "ventas";

 public labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

 public data1 = {
  labels: this.labels,
  datasets: [
    { data: [ 30, 4, 10 ], 
      backgroundColor: ["#6857E6", "#009FEE", "#F02059"],
    
    },
  ]
};


  
}
