/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Widget } from "widget-core";
import 'chart.js';
import { GspWidgetChartjsSettingsComponent } from './gsp-widget-chartjs-settings.component';
let GspWidgetChartjsComponent = class GspWidgetChartjsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.canvas = document.getElementById('myChart');
        // this.ctx = this.canvas.getContext('2d');
        this.ctx = ((/** @type {?} */ (this.myCanvas.nativeElement))).getContext('2d');
        /** @type {?} */
        var Cc = Chart;
        //Chart.__moduleExports && Chart.default.Chart || Chart;
        /** @type {?} */
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
};
GspWidgetChartjsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gsp-widget-chartjs',
                template: `
  <canvas width="300" height="300" #chart></canvas>

  `
            }] }
];
/** @nocollapse */
GspWidgetChartjsComponent.ctorParameters = () => [];
GspWidgetChartjsComponent.propDecorators = {
    myCanvas: [{ type: ViewChild, args: ['chart',] }]
};
GspWidgetChartjsComponent = tslib_1.__decorate([
    Widget({
        name: "chart",
        settingComponent: GspWidgetChartjsSettingsComponent
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GspWidgetChartjsComponent);
export { GspWidgetChartjsComponent };
if (false) {
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.myCanvas;
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.canvas;
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.ctx;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3NwLXdpZGdldC1jaGFydGpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2NoYXJ0anMvZ3NwLXdpZGdldC1jaGFydGpzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVyQyxPQUFPLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztJQWdCL0UseUJBQXlCLFNBQXpCLHlCQUF5QjtJQU1wQyxnQkFBZ0IsQ0FBQzs7OztJQUNqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELGVBQWU7UUFFYixvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFekUsRUFBRSxHQUFHLEtBQUs7OztZQUVWLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDO2dCQUN6QyxRQUFRLEVBQUUsQ0FBQzt3QkFDVCxLQUFLLEVBQUUsWUFBWTt3QkFDbkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2YsZUFBZSxFQUFFOzRCQUNmLHVCQUF1Qjs0QkFDdkIsdUJBQXVCOzRCQUN2Qix1QkFBdUI7eUJBQ3hCO3dCQUNELFdBQVcsRUFBRSxDQUFDO3FCQUNmLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsS0FBSzthQUNsQjtTQUNGLENBQUM7SUFJSixDQUFDO0NBRUYsQ0FBQTs7WUFqREEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7O0dBR1Q7YUFFRjs7Ozs7dUJBR0UsU0FBUyxTQUFDLE9BQU87O0FBRlAseUJBQXlCO0lBWnJDLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxPQUFPO1FBQ2IsZ0JBQWdCLEVBQUUsaUNBQWlDO0tBQ3BELENBQUM7O0dBU1cseUJBQXlCLENBeUNyQztTQXpDWSx5QkFBeUI7OztJQUVwQyw2Q0FBeUM7O0lBRXpDLDJDQUFZOztJQUNaLHdDQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpZGdldCB9IGZyb20gXCJ3aWRnZXQtY29yZVwiO1xuXG5pbXBvcnQgJ2NoYXJ0LmpzJztcbmltcG9ydCB7IEdzcFdpZGdldENoYXJ0anNTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzLmNvbXBvbmVudCc7XG5cbmRlY2xhcmUgdmFyIENoYXJ0OiBhbnk7XG5cbkBXaWRnZXQoe1xuICBuYW1lOiBcImNoYXJ0XCIsXG4gIHNldHRpbmdDb21wb25lbnQ6IEdzcFdpZGdldENoYXJ0anNTZXR0aW5nc0NvbXBvbmVudFxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1nc3Atd2lkZ2V0LWNoYXJ0anMnLFxuICB0ZW1wbGF0ZTogYFxuICA8Y2FudmFzIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgI2NoYXJ0PjwvY2FudmFzPlxuXG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR3NwV2lkZ2V0Q2hhcnRqc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnY2hhcnQnKSBteUNhbnZhczogRWxlbWVudFJlZjtcblxuICBjYW52YXM6IGFueTtcbiAgY3R4OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcbiAgICAvLyB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jdHggPSAoPEhUTUxDYW52YXNFbGVtZW50PnRoaXMubXlDYW52YXMubmF0aXZlRWxlbWVudCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHZhciBDYyA9IENoYXJ0OyAvL0NoYXJ0Ll9fbW9kdWxlRXhwb3J0cyAmJiBDaGFydC5kZWZhdWx0LkNoYXJ0IHx8IENoYXJ0O1xuXG4gICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2ModGhpcy5jdHgsIHtcbiAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtcIk5ld1wiLCBcIkluIFByb2dyZXNzXCIsIFwiT24gSG9sZFwiXSxcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcbiAgICAgICAgICBkYXRhOiBbMSwgMiwgM10sXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbiAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxuICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKSdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICByZXNwb25zaXZlOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG5cblxuICB9XG5cbn1cbiJdfQ==