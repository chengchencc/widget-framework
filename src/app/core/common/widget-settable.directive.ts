import { Directive, HostListener } from '@angular/core';
import { LayoutService } from './layout.service';

@Directive({
    selector: 'core-widget-settable',
})
export class WidgetSettableDirective {
    selected: boolean = false;

    constructor(private layoutService: LayoutService) {

    }

    @HostListener("click", ['$event'])
    select(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();
        //unselected
        if (this.layoutService.activedLayout)
            this.layoutService.activedLayout.unselect();
        //selected current
        this.selected = true;
        this.layoutService.activeLayout(this);

    }
    unselect() {
        if (this.selected) this.selected = false;
    }
}