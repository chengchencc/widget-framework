import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

interface ChartSettings{
    title:string,
    legend:boolean
}

@Component({
    selector: 'lib-gsp-widget-chartjs-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class GspWidgetChartjsSettingsComponent implements OnInit {

    @Input() settings:ChartSettings;
    @Output() settingsChange = new EventEmitter<ChartSettings>()
    
    constructor() { }

    ngOnInit(): void { }

    save(){
        this.settingsChange.emit(this.settings);
    }
}
