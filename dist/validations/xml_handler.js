"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlHandler = void 0;
const xmldom_1 = require("xmldom");
class XmlHandler {
    constructor(file) {
        this.xmlHandler = new xmldom_1.DOMParser();
        this.file = file;
        this.init();
    }
    init() {
        this.document = this.xmlHandler.parseFromString(this.file.toString(), 'application/xml').documentElement;
    }
    selectAll(root, nodeName) {
        let elementList = new Array();
        const rootChildren = root.childNodes;
        for (const key of Object.keys(rootChildren)) {
            const node = rootChildren.item(key);
            if (node.nodeName === nodeName) {
                elementList.push(node);
            }
        }
        return elementList;
    }
    selectOne(nodeName) {
        const allNodes = this.document.childNodes;
        let foundNode;
        for (const key of Object.keys(allNodes)) {
            const node = allNodes.item(key);
            if (node.nodeName !== '#text' && node.nodeName !== undefined) {
                if (node.nodeName.toLowerCase() === nodeName.toLowerCase()) {
                    foundNode = node;
                    break;
                }
            }
        }
        return foundNode;
    }
    hasChildren(node) {
        var _a;
        const firstChildNode = node.firstChild;
        if (firstChildNode === null || firstChildNode === undefined)
            return false;
        return ((_a = node.firstChild) === null || _a === void 0 ? void 0 : _a.nodeName) === '#text' && node.childNodes.length > 1;
    }
}
exports.XmlHandler = XmlHandler;
