"use strict";
exports.__esModule = true;
var core_1 = require("@angular-devkit/core");
var webpack_config_merger_1 = require("./webpack-config-merger");
exports.defaultWebpackConfigPath = 'webpack.config.js';
var CustomWebpackBuilder = /** @class */ (function () {
    function CustomWebpackBuilder() {
    }
    CustomWebpackBuilder.buildWebpackConfig = function (root, config, baseWebpackConfig, buildOptions) {
        if (!config) {
            return baseWebpackConfig;
        }
        var webpackConfigPath = config.path || exports.defaultWebpackConfigPath;
        var customWebpackConfig = require(core_1.getSystemPath(root) + "/" + webpackConfigPath);
        if (typeof customWebpackConfig === "function") {
            return customWebpackConfig(baseWebpackConfig, buildOptions);
        }
        else {
            return webpack_config_merger_1.WebpackConfigMerger.merge(baseWebpackConfig, customWebpackConfig, config.mergeStrategies, config.replaceDuplicatePlugins);
        }
    };
    return CustomWebpackBuilder;
}());
exports.CustomWebpackBuilder = CustomWebpackBuilder;
