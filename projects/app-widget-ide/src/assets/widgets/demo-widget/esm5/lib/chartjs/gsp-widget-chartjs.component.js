/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Widget } from "widget-core";
import 'chart.js';
import { GspWidgetChartjsSettingsComponent } from './gsp-widget-chartjs-settings.component';
var GspWidgetChartjsComponent = /** @class */ (function () {
    function GspWidgetChartjsComponent() {
    }
    /**
     * @return {?}
     */
    GspWidgetChartjsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GspWidgetChartjsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // this.canvas = document.getElementById('myChart');
        // this.ctx = this.canvas.getContext('2d');
        this.ctx = ((/** @type {?} */ (this.myCanvas.nativeElement))).getContext('2d');
        /** @type {?} */
        var Cc = Chart;
        //Chart.__moduleExports && Chart.default.Chart || Chart;
        /** @type {?} */
        var myChart = new Cc(this.ctx, {
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
    };
    GspWidgetChartjsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gsp-widget-chartjs',
                    template: "\n  <canvas width=\"300\" height=\"300\" #chart></canvas>\n\n  "
                }] }
    ];
    /** @nocollapse */
    GspWidgetChartjsComponent.ctorParameters = function () { return []; };
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
    return GspWidgetChartjsComponent;
}());
export { GspWidgetChartjsComponent };
if (false) {
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.myCanvas;
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.canvas;
    /** @type {?} */
    GspWidgetChartjsComponent.prototype.ctx;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3NwLXdpZGdldC1jaGFydGpzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2NoYXJ0anMvZ3NwLXdpZGdldC1jaGFydGpzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVyQyxPQUFPLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUFzQjFGO0lBQWdCLENBQUM7Ozs7SUFDakIsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELG1EQUFlOzs7SUFBZjtRQUVFLG9EQUFvRDtRQUNwRCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV6RSxFQUFFLEdBQUcsS0FBSzs7O1lBRVYsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUM7Z0JBQ3pDLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxZQUFZO3dCQUNuQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDZixlQUFlLEVBQUU7NEJBQ2YsdUJBQXVCOzRCQUN2Qix1QkFBdUI7NEJBQ3ZCLHVCQUF1Qjt5QkFDeEI7d0JBQ0QsV0FBVyxFQUFFLENBQUM7cUJBQ2YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQztJQUlKLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLGlFQUdUO2lCQUVGOzs7OzsyQkFHRSxTQUFTLFNBQUMsT0FBTzs7SUFGUCx5QkFBeUI7UUFackMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE9BQU87WUFDYixnQkFBZ0IsRUFBRSxpQ0FBaUM7U0FDcEQsQ0FBQzs7T0FTVyx5QkFBeUIsQ0F5Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxJQUFBO1NBekNZLHlCQUF5Qjs7O0lBRXBDLDZDQUF5Qzs7SUFFekMsMkNBQVk7O0lBQ1osd0NBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIndpZGdldC1jb3JlXCI7XG5cbmltcG9ydCAnY2hhcnQuanMnO1xuaW1wb3J0IHsgR3NwV2lkZ2V0Q2hhcnRqc1NldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9nc3Atd2lkZ2V0LWNoYXJ0anMtc2V0dGluZ3MuY29tcG9uZW50JztcblxuZGVjbGFyZSB2YXIgQ2hhcnQ6IGFueTtcblxuQFdpZGdldCh7XG4gIG5hbWU6IFwiY2hhcnRcIixcbiAgc2V0dGluZ0NvbXBvbmVudDogR3NwV2lkZ2V0Q2hhcnRqc1NldHRpbmdzQ29tcG9uZW50XG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdzcC13aWRnZXQtY2hhcnRqcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxjYW52YXMgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAjY2hhcnQ+PC9jYW52YXM+XG5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHc3BXaWRnZXRDaGFydGpzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKCdjaGFydCcpIG15Q2FudmFzOiBFbGVtZW50UmVmO1xuXG4gIGNhbnZhczogYW55O1xuICBjdHg6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgLy8gdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpO1xuICAgIC8vIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmN0eCA9ICg8SFRNTENhbnZhc0VsZW1lbnQ+dGhpcy5teUNhbnZhcy5uYXRpdmVFbGVtZW50KS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdmFyIENjID0gQ2hhcnQ7IC8vQ2hhcnQuX19tb2R1bGVFeHBvcnRzICYmIENoYXJ0LmRlZmF1bHQuQ2hhcnQgfHwgQ2hhcnQ7XG5cbiAgICBsZXQgbXlDaGFydCA9IG5ldyBDYyh0aGlzLmN0eCwge1xuICAgICAgdHlwZTogJ3BpZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1wiTmV3XCIsIFwiSW4gUHJvZ3Jlc3NcIiwgXCJPbiBIb2xkXCJdLFxuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxuICAgICAgICAgIGRhdGE6IFsxLCAyLCAzXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxuICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gIH1cblxufVxuIl19