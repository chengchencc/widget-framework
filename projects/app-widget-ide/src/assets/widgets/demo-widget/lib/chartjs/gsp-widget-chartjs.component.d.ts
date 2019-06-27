import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import 'chart.js';
export declare class GspWidgetChartjsComponent implements OnInit, AfterViewInit {
    myCanvas: ElementRef;
    canvas: any;
    ctx: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
