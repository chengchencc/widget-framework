import { OnInit, EventEmitter } from '@angular/core';
export declare class CardComponent implements OnInit {
    settings: any;
    titleClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onTitleClick(e: any): void;
}
