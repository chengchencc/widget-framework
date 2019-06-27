/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
/**
 * @record
 */
function ChartSettings() { }
if (false) {
    /** @type {?} */
    ChartSettings.prototype.title;
    /** @type {?} */
    ChartSettings.prototype.legend;
}
export class GspWidgetChartjsSettingsComponent {
    constructor() {
        this.settingsChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    save() {
        this.settingsChange.emit(this.settings);
    }
}
GspWidgetChartjsSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gsp-widget-chartjs-settings',
                template: "<p>\r\n    this is chartjs widget settings page!\r\n</p>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"chartTitle\">\u6807\u9898</label>\r\n  <input type=\"text\" name=\"chartTitle\" id=\"chartTitle\" class=\"form-control\" placeholder=\"\u8BF7\u8F93\u5165\u6807\u9898\" aria-describedby=\"chartTitleHelper\" [(ngModel)]=\"settings.title\">\r\n  <small id=\"chartTitleHelper\" class=\"text-muted\">\u8BF7\u8F93\u5165\u6807\u9898\u3002\u3002\u3002</small>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"custom-control custom-radio\">\r\n    <input type=\"radio\" name=\"legend\" id=\"legend\" value=\"true\" class=\"custom-control-input\" [(ngModel)]=\"settings.legend\">\r\n    <span class=\"custom-control-indicator\"></span>\r\n    <span class=\"custom-control-description\">\u663E\u793A\u56FE\u4F8B</span>\r\n  </label>\r\n</div>\r\n\r\n<button (click)=\"save()\" type=\"button\" name=\"save\" id=\"savesettings\" class=\"btn btn-dark btn-block\">save</button>",
                styles: [""]
            }] }
];
/** @nocollapse */
GspWidgetChartjsSettingsComponent.ctorParameters = () => [];
GspWidgetChartjsSettingsComponent.propDecorators = {
    settings: [{ type: Input }],
    settingsChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GspWidgetChartjsSettingsComponent.prototype.settings;
    /** @type {?} */
    GspWidgetChartjsSettingsComponent.prototype.settingsChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2NoYXJ0anMvZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RSw0QkFHQzs7O0lBRkcsOEJBQWE7O0lBQ2IsK0JBQWM7O0FBUWxCLE1BQU0sT0FBTyxpQ0FBaUM7SUFLMUM7UUFGVSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFBO0lBRTVDLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFXLENBQUM7Ozs7SUFFcEIsSUFBSTtRQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFoQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLHMrQkFBd0M7O2FBRTNDOzs7Ozt1QkFHSSxLQUFLOzZCQUNMLE1BQU07Ozs7SUFEUCxxREFBZ0M7O0lBQ2hDLDJEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0U2V0dGluZ3N7XHJcbiAgICB0aXRsZTpzdHJpbmcsXHJcbiAgICBsZWdlbmQ6Ym9vbGVhblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGliLWdzcC13aWRnZXQtY2hhcnRqcy1zZXR0aW5ncycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3NwV2lkZ2V0Q2hhcnRqc1NldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZXR0aW5nczpDaGFydFNldHRpbmdzO1xyXG4gICAgQE91dHB1dCgpIHNldHRpbmdzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydFNldHRpbmdzPigpXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cclxuXHJcbiAgICBzYXZlKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc0NoYW5nZS5lbWl0KHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==