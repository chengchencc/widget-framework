import { Widget } from './widget-manifest';

// import { WidgetManager } from './widget-manifest';
// export const Widget = WidgetManager.registry;

export class WidgetManager {

    getType(name) {
        return Widget.prototype.getWidgetType(name);
    }

    getProviders() {
        return Widget.prototype.getProviders();
    }

    getRegistryInfo(name) {
        return Widget.prototype.getWidgetRegistryInfo(name);
    }

    getAllRegistries(){
        return Widget.prototype.registry;
    }
}