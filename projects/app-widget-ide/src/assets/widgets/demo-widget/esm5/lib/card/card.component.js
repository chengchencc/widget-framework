/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'widget-core';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.settings = {
            title: "Card Title",
            subtitle: "Sub Title"
        };
        this.titleClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CardComponent.prototype.onTitleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.titleClick.emit({
            event: e,
            msg: "red"
        });
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'demo-widget-card',
                    template: "<div class=\"card\" style=\"\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{settings.title}}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{settings.subtitle}}</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\" (click)=\"onTitleClick($event)\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n    <button class=\"btn btn-danger\">click</button>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        settings: [{ type: Input }],
        titleClick: [{ type: Output }]
    };
    CardComponent = tslib_1.__decorate([
        Widget({
            name: 'demo-widget-card'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.settings;
    /** @type {?} */
    CardComponent.prototype.titleClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZW1vLXdpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQWtCbkM7UUFOUyxhQUFRLEdBQU87WUFDdEIsS0FBSyxFQUFDLFlBQVk7WUFDbEIsUUFBUSxFQUFDLFdBQVc7U0FDckIsQ0FBQztRQUNRLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRS9CLENBQUM7Ozs7SUFFakIsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssRUFBQyxDQUFDO1lBQ1AsR0FBRyxFQUFDLEtBQUs7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDhoQkFBb0M7O2lCQUVyQzs7Ozs7MkJBR0UsS0FBSzs2QkFJTCxNQUFNOztJQU5JLGFBQWE7UUFSekIsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFDLGtCQUFrQjtTQUN4QixDQUFDOztPQU1XLGFBQWEsQ0FtQnpCO0lBQUQsb0JBQUM7Q0FBQSxJQUFBO1NBbkJZLGFBQWE7OztJQUV4QixpQ0FHRTs7SUFDRixtQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICd3aWRnZXQtY29yZSc7XG5cbkBXaWRnZXQoe1xuICBuYW1lOidkZW1vLXdpZGdldC1jYXJkJ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlbW8td2lkZ2V0LWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOmFueSA9IHtcbiAgICB0aXRsZTpcIkNhcmQgVGl0bGVcIixcbiAgICBzdWJ0aXRsZTpcIlN1YiBUaXRsZVwiXG4gIH07XG4gIEBPdXRwdXQoKSB0aXRsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uVGl0bGVDbGljayhlKXtcbiAgICB0aGlzLnRpdGxlQ2xpY2suZW1pdCh7XG4gICAgICBldmVudDplLFxuICAgICAgbXNnOlwicmVkXCJcbiAgICB9KTtcbiAgfVxufVxuXG5cbiJdfQ==