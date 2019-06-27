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
var GspWidgetChartjsSettingsComponent = /** @class */ (function () {
    function GspWidgetChartjsSettingsComponent() {
        this.settingsChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    GspWidgetChartjsSettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    GspWidgetChartjsSettingsComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        this.settingsChange.emit(this.settings);
    };
    GspWidgetChartjsSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gsp-widget-chartjs-settings',
                    template: "<p>\r\n    this is chartjs widget settings page!\r\n</p>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"chartTitle\">\u6807\u9898</label>\r\n  <input type=\"text\" name=\"chartTitle\" id=\"chartTitle\" class=\"form-control\" placeholder=\"\u8BF7\u8F93\u5165\u6807\u9898\" aria-describedby=\"chartTitleHelper\" [(ngModel)]=\"settings.title\">\r\n  <small id=\"chartTitleHelper\" class=\"text-muted\">\u8BF7\u8F93\u5165\u6807\u9898\u3002\u3002\u3002</small>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"custom-control custom-radio\">\r\n    <input type=\"radio\" name=\"legend\" id=\"legend\" value=\"true\" class=\"custom-control-input\" [(ngModel)]=\"settings.legend\">\r\n    <span class=\"custom-control-indicator\"></span>\r\n    <span class=\"custom-control-description\">\u663E\u793A\u56FE\u4F8B</span>\r\n  </label>\r\n</div>\r\n\r\n<button (click)=\"save()\" type=\"button\" name=\"save\" id=\"savesettings\" class=\"btn btn-dark btn-block\">save</button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GspWidgetChartjsSettingsComponent.ctorParameters = function () { return []; };
    GspWidgetChartjsSettingsComponent.propDecorators = {
        settings: [{ type: Input }],
        settingsChange: [{ type: Output }]
    };
    return GspWidgetChartjsSettingsComponent;
}());
export { GspWidgetChartjsSettingsComponent };
if (false) {
    /** @type {?} */
    GspWidgetChartjsSettingsComponent.prototype.settings;
    /** @type {?} */
    GspWidgetChartjsSettingsComponent.prototype.settingsChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2NoYXJ0anMvZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RSw0QkFHQzs7O0lBRkcsOEJBQWE7O0lBQ2IsK0JBQWM7O0FBR2xCO0lBVUk7UUFGVSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFBO0lBRTVDLENBQUM7Ozs7SUFFakIsb0RBQVE7OztJQUFSLGNBQW1CLENBQUM7Ozs7SUFFcEIsZ0RBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQWhCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MscytCQUF3Qzs7aUJBRTNDOzs7OzsyQkFHSSxLQUFLO2lDQUNMLE1BQU07O0lBU1gsd0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGlDQUFpQzs7O0lBRTFDLHFEQUFnQzs7SUFDaEMsMkRBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCxFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRTZXR0aW5nc3tcclxuICAgIHRpdGxlOnN0cmluZyxcclxuICAgIGxlZ2VuZDpib29sZWFuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWItZ3NwLXdpZGdldC1jaGFydGpzLXNldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHc3BXaWRnZXRDaGFydGpzU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHNldHRpbmdzOkNoYXJ0U2V0dGluZ3M7XHJcbiAgICBAT3V0cHV0KCkgc2V0dGluZ3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0U2V0dGluZ3M+KClcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIHNhdmUoKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdzQ2hhbmdlLmVtaXQodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB9XHJcbn1cclxuIl19