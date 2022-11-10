"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileParser = void 0;
var xml_handler_1 = require("./xml_handler");
var string_helpers_1 = require("../utils/string_helpers");
var FileParser = /** @class */ (function () {
    function FileParser() {
    }
    FileParser.parse = function (file, reporte) {
        var xmlHandler = new xml_handler_1.XmlHandler(file);
        var object = new Map();
        object.set('generalLedgerEntries', this.buildObject(xmlHandler, xmlHandler.selectOne('GeneralLedgerEntries'), new Array()));
        object.set('header', this.buildObject(xmlHandler, xmlHandler.selectOne('Header'), new Array()));
        object.set('masterFiles', this.buildObject(xmlHandler, xmlHandler.selectOne('MasterFiles'), new Array('Customer', 'Product', 'Supplier', 'TaxTableEntry')));
        object.set('sourceDocuments', this.buildObject(xmlHandler, xmlHandler.selectOne('SourceDocuments'), new Array('Invoice', 'Line', 'WorkDocument', 'TaxTableEntry')));
        console.log(object);
        return object;
    };
    FileParser.buildObject = function (xmlHandler, root, buildAsList) {
        var object;
        if (root !== undefined && root !== null) {
            object = new Map();
            var nodes = root.childNodes;
            var _loop_1 = function (key) {
                var node = nodes.item(key);
                if (node.nodeName !== '#text' && node.nodeName !== undefined && node.nodeName !== null) {
                    var item = buildAsList.find(function (item) { return item === node.nodeName; });
                    if (item !== undefined && node.nodeName !== null && item === node.nodeName) {
                        var children = xmlHandler.selectAll(root, node.nodeName);
                        var objects = new Array();
                        if (children) {
                            for (var _b = 0, _c = Object.keys(children); _b < _c.length; _b++) {
                                var _key = _c[_b];
                                var element = children.at(_key);
                                objects.push(this_1.buildObject(xmlHandler, element, buildAsList));
                            }
                            object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), objects);
                            return "continue";
                        }
                        return "continue";
                    }
                    if (xmlHandler.hasChildren(node)) {
                        object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), this_1.buildObject(xmlHandler, node, buildAsList));
                        return "continue";
                    }
                    object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), node.textContent);
                    return "continue";
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = Object.keys(nodes); _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
            return object;
        }
        return object;
    };
    return FileParser;
}());
exports.FileParser = FileParser;
