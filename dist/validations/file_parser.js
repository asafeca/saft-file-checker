"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileParser = void 0;
const xml_handler_1 = require("./xml_handler");
const string_helpers_1 = require("../utils/string_helpers");
class FileParser {
    static parse(file, reporte) {
        const xmlHandler = new xml_handler_1.XmlHandler(file);
        let obj = new Map();
        obj.set('generalLedgerEntries', this.buildObject(xmlHandler, xmlHandler.selectOne('GeneralLedgerEntries'), new Array()));
        obj.set('header', this.buildObject(xmlHandler, xmlHandler.selectOne('Header'), new Array()));
        obj.set('masterFiles', this.buildObject(xmlHandler, xmlHandler.selectOne('MasterFiles'), new Array('Customer', 'Product', 'Supplier', 'TaxTableEntry')));
        obj.set('sourceDocuments', this.buildObject(xmlHandler, xmlHandler.selectOne('SourceDocuments'), new Array('Invoice', 'Line', 'WorkDocument', 'TaxTableEntry')));
        return obj;
    }
    static buildObject(xmlHandler, root, buildAsList) {
        var _a;
        let object = new Map();
        if (root !== undefined && root !== null) {
            const nodes = root.childNodes;
            for (const key of Object.keys(nodes)) {
                const node = nodes.item(key);
                if (node.nodeName !== '#text' && node.nodeName !== undefined && node.nodeName !== null) {
                    const item = buildAsList.find(item => item === node.nodeName);
                    if (item !== undefined && node.nodeName !== null && item === node.nodeName) {
                        const children = xmlHandler.selectAll(root, node.nodeName);
                        let objects = new Array();
                        if (children) {
                            for (const _key of Object.keys(children)) {
                                const element = children.at(_key);
                                objects.push(this.buildObject(xmlHandler, element, buildAsList));
                            }
                            object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), objects);
                            continue;
                        }
                        continue;
                    }
                    if (xmlHandler.hasChildren(node)) {
                        object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), this.buildObject(xmlHandler, node, buildAsList));
                        continue;
                    }
                    object.set(string_helpers_1.StringHelper.firstCharToLowerCase(node.nodeName), (_a = node.textContent) !== null && _a !== void 0 ? _a : new Object);
                    continue;
                }
            }
            return object;
        }
        return object;
    }
}
exports.FileParser = FileParser;
