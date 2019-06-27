/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Widget } from 'widget-core';
var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
    }
    Object.defineProperty(JumbotronComponent.prototype, "fcolor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.color || "black";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    JumbotronComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    JumbotronComponent.prototype.resetColor = /**
     * @return {?}
     */
    function () {
        this.color = "black";
    };
    JumbotronComponent.decorators = [
        { type: Component, args: [{
                    selector: 'demo-widget-jumbotron',
                    template: "<div class=\"jumbotron\">\n  <h1 class=\"display-4\" [style.color]=\"fcolor\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" (click)=\"resetColor()\">reset color</a>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    JumbotronComponent.ctorParameters = function () { return []; };
    JumbotronComponent.propDecorators = {
        color: [{ type: Input }]
    };
    JumbotronComponent = tslib_1.__decorate([
        Widget({
            name: 'demo-widget-jumbotron'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());
export { JumbotronComponent };
if (false) {
    /** @type {?} */
    JumbotronComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVtYm90cm9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFrQm5DO0lBQWdCLENBQUM7SUFMakIsc0JBQVcsc0NBQU07Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBS0QscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHVDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsNmZBQXlDOztpQkFFMUM7Ozs7O3dCQUdFLEtBQUs7O0lBRkssa0JBQWtCO1FBUjlCLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBQyx1QkFBdUI7U0FDN0IsQ0FBQzs7T0FNVyxrQkFBa0IsQ0FrQjlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBbEJZLGtCQUFrQjs7O0lBRTdCLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJ3dpZGdldC1jb3JlJztcbkBXaWRnZXQoe1xuICBuYW1lOidkZW1vLXdpZGdldC1qdW1ib3Ryb24nXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVtby13aWRnZXQtanVtYm90cm9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2p1bWJvdHJvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSnVtYm90cm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb2xvcjpzdHJpbmc7XG5cbiAgcHVibGljIGdldCBmY29sb3IoKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3IgfHwgXCJibGFja1wiO1xuICB9XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByZXNldENvbG9yKCl7XG4gICAgdGhpcy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgfVxuXG59XG4iXX0=