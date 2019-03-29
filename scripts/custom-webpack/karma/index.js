"use strict";
/**
 * Created by Evgeny Barabanov on 05/10/2018.
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
var CustomWebpackKarmaBuilder = /** @class */ (function (_super) {
    __extends(CustomWebpackKarmaBuilder, _super);
    function CustomWebpackKarmaBuilder(context) {
        return _super.call(this, context) || this;
    }
    CustomWebpackKarmaBuilder.prototype.buildWebpackConfig = function (root, projectRoot, sourceRoot, host, options) {
        var karmaConfig = _super.prototype.buildWebpackConfig.call(this, root, projectRoot, sourceRoot, host, options);
        return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig(root, options.customWebpackConfig, karmaConfig, options);
    };
    return CustomWebpackKarmaBuilder;
}(build_angular_1.KarmaBuilder));
exports.CustomWebpackKarmaBuilder = CustomWebpackKarmaBuilder;
exports["default"] = CustomWebpackKarmaBuilder;
