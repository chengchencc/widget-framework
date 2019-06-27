
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Widget } from "widget-core";

import 'chart.js';
import { GspWidgetChartjsSettingsComponent } from './gsp-widget-chartjs-settings.component';

declare var Chart: any;

@Widget({
  name: "chart",
  settingComponent: GspWidgetChartjsSettingsComponent
})
@Component({
  selector: 'lib-gsp-widget-chartjs',
  template: `
  <canvas width="300" height="300" #chart></canvas>

  `,
  styles: []
})
export class GspWidgetChartjsComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') myCanvas: ElementRef;

  canvas: any;
  ctx: any;
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {

    // this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext('2d');
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');

    var Cc = Chart; //Chart.__moduleExports && Chart.default.Chart || Chart;

    let myChart = new Cc(this.ctx, {
      type: 'pie',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false
      }
    });



  }

}
