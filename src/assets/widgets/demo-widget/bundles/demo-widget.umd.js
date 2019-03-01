(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('widget-core')) :
    typeof define === 'function' && define.amd ? define('demo-widget', ['exports', '@angular/core', 'widget-core'], factory) :
    (factory((global['demo-widget'] = {}),global.ng.core,global.widgetCore));
}(this, (function (exports,i0,widgetCore) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoWidgetService = /** @class */ (function () {
        function DemoWidgetService() {
        }
        DemoWidgetService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DemoWidgetService.ctorParameters = function () { return []; };
        /** @nocollapse */ DemoWidgetService.ngInjectableDef = i0.defineInjectable({ factory: function DemoWidgetService_Factory() { return new DemoWidgetService(); }, token: DemoWidgetService, providedIn: "root" });
        return DemoWidgetService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

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
            { type: i0.Component, args: [{
                        selector: 'demo-widget-demo-widget',
                        template: "   \n    <div class=\"alert alert-primary\" role=\"alert\">\n    <strong>demo-widget works!</strong>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        DemoWidgetComponent.ctorParameters = function () { return []; };
        DemoWidgetComponent = __decorate([
            widgetCore.Widget({
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
    var DemoWidgetNavComponent = /** @class */ (function () {
        function DemoWidgetNavComponent() {
        }
        /**
         * @return {?}
         */
        DemoWidgetNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DemoWidgetNavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'demo-widget-demo-widget-nav',
                        template: "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdownId\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownId\">\n          <a class=\"dropdown-item\" href=\"#\">Action 1</a>\n          <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DemoWidgetNavComponent.ctorParameters = function () { return []; };
        DemoWidgetNavComponent = __decorate([
            widgetCore.Widget({
                name: "demo-widget-nav"
            }),
            __metadata("design:paramtypes", [])
        ], DemoWidgetNavComponent);
        return DemoWidgetNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JumbotronComponent = /** @class */ (function () {
        function JumbotronComponent() {
        }
        /**
         * @return {?}
         */
        JumbotronComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        JumbotronComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'demo-widget-jumbotron',
                        template: "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        JumbotronComponent.ctorParameters = function () { return []; };
        JumbotronComponent = __decorate([
            widgetCore.Widget({
                name: 'demo-widget-jumbotron'
            }),
            __metadata("design:paramtypes", [])
        ], JumbotronComponent);
        return JumbotronComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormLoginComponent = /** @class */ (function () {
        function FormLoginComponent() {
        }
        /**
         * @return {?}
         */
        FormLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FormLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'demo-widget-form-login',
                        template: "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FormLoginComponent.ctorParameters = function () { return []; };
        FormLoginComponent = __decorate([
            widgetCore.Widget({
                name: 'demo-widget-form-login'
            }),
            __metadata("design:paramtypes", [])
        ], FormLoginComponent);
        return FormLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        /**
         * @return {?}
         */
        CardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'demo-widget-card',
                        template: "<div class=\"card\" style=\"\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CardComponent.ctorParameters = function () { return []; };
        CardComponent = __decorate([
            widgetCore.Widget({
                name: 'demo-widget-card'
            }),
            __metadata("design:paramtypes", [])
        ], CardComponent);
        return CardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoWidgetModule = /** @class */ (function () {
        function DemoWidgetModule() {
        }
        DemoWidgetModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DemoWidgetComponent, DemoWidgetNavComponent, JumbotronComponent, FormLoginComponent, CardComponent],
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

    exports.DemoWidgetService = DemoWidgetService;
    exports.DemoWidgetComponent = DemoWidgetComponent;
    exports.DemoWidgetModule = DemoWidgetModule;
    exports.ɵd = CardComponent;
    exports.ɵa = DemoWidgetNavComponent;
    exports.ɵc = FormLoginComponent;
    exports.ɵb = JumbotronComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=demo-widget.umd.js.map