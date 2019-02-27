import { __decorate, __metadata } from 'tslib';
import { Widget } from 'widget-core';
import { Injectable, NgModule, defineInjectable, Component } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoWidgetService {
    constructor() { }
}
DemoWidgetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DemoWidgetService.ctorParameters = () => [];
/** @nocollapse */ DemoWidgetService.ngInjectableDef = defineInjectable({ factory: function DemoWidgetService_Factory() { return new DemoWidgetService(); }, token: DemoWidgetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let DemoWidgetComponent = class DemoWidgetComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
};
DemoWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-demo-widget',
                template: `   
    <div class="alert alert-primary" role="alert">
    <strong>demo-widget works!</strong>
    </div>
  `
            }] }
];
/** @nocollapse */
DemoWidgetComponent.ctorParameters = () => [];
DemoWidgetComponent = __decorate([
    Widget({
        name: "demo-widget"
    }),
    __metadata("design:paramtypes", [])
], DemoWidgetComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoWidgetModule {
}
DemoWidgetModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DemoWidgetComponent],
                imports: [],
                exports: [DemoWidgetComponent]
            },] }
];

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