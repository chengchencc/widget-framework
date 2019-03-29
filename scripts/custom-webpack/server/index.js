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
var CustomWebpackServerBuilder = /** @class */ (function (_super) {
    __extends(CustomWebpackServerBuilder, _super);
    function CustomWebpackServerBuilder(context) {
        var _this = _super.call(this, context) || this;
        _this.context = context;
        return _this;
    }
    CustomWebpackServerBuilder.prototype.buildWebpackConfig = function (root, projectRoot, host, options) {
        var serverWebpackConfig = _super.prototype.buildWebpackConfig.call(this, root, projectRoot, host, options);
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, options.customWebpackConfig, serverWebpackConfig, options);
    };
    return CustomWebpackServerBuilder;
}(build_angular_1.ServerBuilder));
exports.CustomWebpackServerBuilder = CustomWebpackServerBuilder;
exports["default"] = CustomWebpackServerBuilder;
