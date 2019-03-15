/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from 'widget-core';
let CardComponent = class CardComponent {
    constructor() {
        this.settings = {
            title: "Card Title",
            subtitle: "Sub Title"
        };
        this.titleClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onTitleClick(e) {
        this.titleClick.emit({
            event: e,
            msg: "red"
        });
    }
};
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-widget-card',
                template: "<div class=\"card\" style=\"\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{settings.title}}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{settings.subtitle}}</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"card-link\" (click)=\"onTitleClick($event)\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n    <button class=\"btn btn-danger\">click</button>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
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
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.settings;
    /** @type {?} */
    CardComponent.prototype.titleClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZW1vLXdpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0lBU3hCLGFBQWEsU0FBYixhQUFhO0lBUXhCO1FBTlMsYUFBUSxHQUFPO1lBQ3RCLEtBQUssRUFBQyxZQUFZO1lBQ2xCLFFBQVEsRUFBQyxXQUFXO1NBQ3JCLENBQUM7UUFDUSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUUvQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFDLENBQUM7WUFDUCxHQUFHLEVBQUMsS0FBSztTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXhCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsOGhCQUFvQzs7YUFFckM7Ozs7O3VCQUdFLEtBQUs7eUJBSUwsTUFBTTs7QUFOSSxhQUFhO0lBUnpCLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBQyxrQkFBa0I7S0FDeEIsQ0FBQzs7R0FNVyxhQUFhLENBbUJ6QjtTQW5CWSxhQUFhOzs7SUFFeEIsaUNBR0U7O0lBQ0YsbUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnd2lkZ2V0LWNvcmUnO1xuQFdpZGdldCh7XG4gIG5hbWU6J2RlbW8td2lkZ2V0LWNhcmQnXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVtby13aWRnZXQtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6YW55ID0ge1xuICAgIHRpdGxlOlwiQ2FyZCBUaXRsZVwiLFxuICAgIHN1YnRpdGxlOlwiU3ViIFRpdGxlXCJcbiAgfTtcbiAgQE91dHB1dCgpIHRpdGxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25UaXRsZUNsaWNrKGUpe1xuICAgIHRoaXMudGl0bGVDbGljay5lbWl0KHtcbiAgICAgIGV2ZW50OmUsXG4gICAgICBtc2c6XCJyZWRcIlxuICAgIH0pO1xuICB9XG59XG5cblxuIl19