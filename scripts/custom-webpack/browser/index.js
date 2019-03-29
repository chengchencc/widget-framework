"use strict";
/**
 * Created by Evgeny Barabanov on 28/06/2018.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var build_angular_1 = require("@angular-devkit/build-angular");
var custom_webpack_builder_1 = require("../custom-webpack-builder");
var CustomWebpackBrowserBuilder = /** @class */ (function (_super) {
    __extends(CustomWebpackBrowserBuilder, _super);
    function CustomWebpackBrowserBuilder(context) {
        return _super.call(this, context) || this;
    }
    CustomWebpackBrowserBuilder.prototype.buildWebpackConfig = function (root, projectRoot, host, options) {
        var browserWebpackConfig = _super.prototype.buildWebpackConfig.call(this, root, projectRoot, host, options);
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, options.customWebpackConfig, browserWebpackConfig, options);
    };
    return CustomWebpackBrowserBuilder;
}(build_angular_1.BrowserBuilder));
exports.CustomWebpackBrowserBuilder = CustomWebpackBrowserBuilder;
exports["default"] = CustomWebpackBrowserBuilder;
