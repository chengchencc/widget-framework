"use strict";
exports.__esModule = true;
var webpackMerge = require("webpack-merge");
var lodash_1 = require("lodash");
var WebpackConfigMerger = /** @class */ (function () {
    function WebpackConfigMerger() {
    }
    WebpackConfigMerger.merge = function (webpackConfig1, webpackConfig2, mergeStrategies, replacePlugins) {
        if (mergeStrategies === void 0) { mergeStrategies = {}; }
        if (replacePlugins === void 0) { replacePlugins = false; }
        var mergedConfig = webpackMerge.smartStrategy(mergeStrategies)(webpackConfig1, webpackConfig2);
        if (webpackConfig1.plugins && webpackConfig2.plugins) {
            var conf1ExceptConf2 = lodash_1.differenceWith(webpackConfig1.plugins, webpackConfig2.plugins, function (item1, item2) { return item1.constructor.name === item2.constructor.name; });
            if (!replacePlugins) {
                var conf1ByName_1 = lodash_1.keyBy(webpackConfig1.plugins, 'constructor.name');
                webpackConfig2.plugins = webpackConfig2.plugins.map(function (p) { return conf1ByName_1[p.constructor.name] ? lodash_1.merge(conf1ByName_1[p.constructor.name], p) : p; });
            }
            mergedConfig.plugins = conf1ExceptConf2.concat(webpackConfig2.plugins);
        }
        return mergedConfig;
    };
    return WebpackConfigMerger;
}());
exports.WebpackConfigMerger = WebpackConfigMerger;
