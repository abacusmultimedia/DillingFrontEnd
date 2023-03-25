import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: any = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any = [
    { data: [50], label: 'Series A', stack: 'a' },
    { data: [50], label: 'Series C', stack: 'a' },
    { data: [50], label: 'Series D', stack: 'a' },
    { data: [60], label: 'Series E', stack: 'a' },
  ];

  constructor() {}

  ngOnInit() {}
}
