"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlHandler = void 0;
var xmldom_1 = require("xmldom");
var XmlHandler = /** @class */ (function () {
    function XmlHandler(file) {
        this.xmlHandler = new xmldom_1.DOMParser();
        this.file = file;
        this.init();
    }
    XmlHandler.prototype.init = function () {
        this.document = this.xmlHandler.parseFromString(this.file.toString(), 'application/xml').documentElement;
    };
    XmlHandler.prototype.selectAll = function (root, nodeName) {
        var elementList = new Array();
        var rootChildren = root.childNodes;
        for (var _i = 0, _a = Object.keys(rootChildren); _i < _a.length; _i++) {
            var key = _a[_i];
            var node = rootChildren.item(key);
            if (node.nodeName === nodeName) {
                elementList.push(node);
            }
        }
        return elementList;
    };
    XmlHandler.prototype.selectOne = function (nodeName) {
        var allNodes = this.document.childNodes;
        var foundNode;
        for (var _i = 0, _a = Object.keys(allNodes); _i < _a.length; _i++) {
            var key = _a[_i];
            var node = allNodes.item(key);
            if (node.nodeName !== '#text' && node.nodeName !== undefined) {
                if (node.nodeName.toLowerCase() === nodeName.toLowerCase()) {
                    foundNode = node;
                    break;
                }
            }
        }
        return foundNode;
    };
    XmlHandler.prototype.hasChildren = function (node) {
        var _a;
        var firstChildNode = node.firstChild;
        if (firstChildNode === null || firstChildNode === undefined)
            return false;
        return ((_a = node.firstChild) === null || _a === void 0 ? void 0 : _a.nodeName) === '#text' && node.childNodes.length > 1;
    };
    return XmlHandler;
}());
exports.XmlHandler = XmlHandler;
