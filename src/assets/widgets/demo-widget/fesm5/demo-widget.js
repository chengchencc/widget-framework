import { __decorate, __metadata } from 'tslib';
import { Widget } from 'widget-core';
import { Injectable, NgModule, defineInjectable, Component } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoWidgetService = /** @class */ (function () {
    function DemoWidgetService() {
    }
    DemoWidgetService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DemoWidgetService.ctorParameters = function () { return []; };
    /** @nocollapse */ DemoWidgetService.ngInjectableDef = defineInjectable({ factory: function DemoWidgetService_Factory() { return new DemoWidgetService(); }, token: DemoWidgetService, providedIn: "root" });
    return DemoWidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoWidgetComponent = /** @class */ (function () {
    function DemoWidgetComponent() {
    }
    /**
     * @return {?}
     */
    DemoWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DemoWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'demo-widget-demo-widget',
                    template: "   \n    <div class=\"alert alert-primary\" role=\"alert\">\n    <strong>demo-widget works!</strong>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DemoWidgetComponent.ctorParameters = function () { return []; };
    DemoWidgetComponent = __decorate([
        Widget({
            name: "demo-widget"
        }),
        __metadata("design:paramtypes", [])
    ], DemoWidgetComponent);
    return DemoWidgetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoWidgetModule = /** @class */ (function () {
    function DemoWidgetModule() {
    }
    DemoWidgetModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DemoWidgetComponent],
                    imports: [],
                    exports: [DemoWidgetComponent]
                },] }
    ];
    return DemoWidgetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DemoWidgetService, DemoWidgetComponent, DemoWidgetModule };

//# sourceMappingURL=demo-widget.js.map