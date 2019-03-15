/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Widget } from 'widget-core';
let JumbotronComponent = class JumbotronComponent {
    constructor() { }
    /**
     * @return {?}
     */
    get fcolor() {
        return this.color || "black";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    resetColor() {
        this.color = "black";
    }
};
JumbotronComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-jumbotron',
                template: "<div class=\"jumbotron\">\n  <h1 class=\"display-4\" [style.color]=\"fcolor\">Hello, world!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" (click)=\"resetColor()\">reset color</a>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
JumbotronComponent.ctorParameters = () => [];
JumbotronComponent.propDecorators = {
    color: [{ type: Input }]
};
JumbotronComponent = tslib_1.__decorate([
    Widget({
        name: 'demo-widget-jumbotron'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], JumbotronComponent);
export { JumbotronComponent };
if (false) {
    /** @type {?} */
    JumbotronComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVtYm90cm9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RlbW8td2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztJQVN4QixrQkFBa0IsU0FBbEIsa0JBQWtCO0lBUzdCLGdCQUFnQixDQUFDOzs7O0lBTGpCLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7Q0FFRixDQUFBOztZQXZCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNmZBQXlDOzthQUUxQzs7Ozs7b0JBR0UsS0FBSzs7QUFGSyxrQkFBa0I7SUFSOUIsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFDLHVCQUF1QjtLQUM3QixDQUFDOztHQU1XLGtCQUFrQixDQWtCOUI7U0FsQlksa0JBQWtCOzs7SUFFN0IsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnd2lkZ2V0LWNvcmUnO1xuQFdpZGdldCh7XG4gIG5hbWU6J2RlbW8td2lkZ2V0LWp1bWJvdHJvbidcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZW1vLXdpZGdldC1qdW1ib3Ryb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vanVtYm90cm9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vanVtYm90cm9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBKdW1ib3Ryb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yOnN0cmluZztcblxuICBwdWJsaWMgZ2V0IGZjb2xvcigpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvciB8fCBcImJsYWNrXCI7XG4gIH1cbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHJlc2V0Q29sb3IoKXtcbiAgICB0aGlzLmNvbG9yID0gXCJibGFja1wiO1xuICB9XG5cbn1cbiJdfQ==