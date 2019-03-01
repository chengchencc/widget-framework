import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { Widget } from 'widget-core';

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
let DemoWidgetNavComponent = class DemoWidgetNavComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
};
DemoWidgetNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-demo-widget-nav',
                template: "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdownId\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownId\">\n          <a class=\"dropdown-item\" href=\"#\">Action 1</a>\n          <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DemoWidgetNavComponent.ctorParameters = () => [];
DemoWidgetNavComponent = __decorate([
    Widget({
        name: "demo-widget-nav"
    }),
    __metadata("design:paramtypes", [])
], DemoWidgetNavComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let JumbotronComponent = class JumbotronComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
};
JumbotronComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-jumbotron',
                template: "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
JumbotronComponent.ctorParameters = () => [];
JumbotronComponent = __decorate([
    Widget({
        name: 'demo-widget-jumbotron'
    }),
    __metadata("design:paramtypes", [])
], JumbotronComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let FormLoginComponent = class FormLoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
};
FormLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-form-login',
                template: "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
FormLoginComponent.ctorParameters = () => [];
FormLoginComponent = __decorate([
    Widget({
        name: 'demo-widget-form-login'
    }),
    __metadata("design:paramtypes", [])
], FormLoginComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CardComponent = class CardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
};
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-card',
                template: "<div class=\"card\" style=\"\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent = __decorate([
    Widget({
        name: 'demo-widget-card'
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoWidgetModule {
}
DemoWidgetModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DemoWidgetComponent, DemoWidgetNavComponent, JumbotronComponent, FormLoginComponent, CardComponent],
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

export { DemoWidgetService, DemoWidgetComponent, DemoWidgetModule, CardComponent as ɵd, DemoWidgetNavComponent as ɵa, FormLoginComponent as ɵc, JumbotronComponent as ɵb };

//# sourceMappingURL=demo-widget.js.map