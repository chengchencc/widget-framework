import { OnInit, EventEmitter } from '@angular/core';
interface ChartSettings {
    title: string;
    legend: boolean;
}
export declare class GspWidgetChartjsSettingsComponent implements OnInit {
    settings: ChartSettings;
    settingsChange: EventEmitter<ChartSettings>;
    constructor();
    ngOnInit(): void;
    save(): void;
}
export {};
