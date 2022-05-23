"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipToAndFromValidation = void 0;
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var ShipToAndFromValidation = /** @class */ (function () {
    function ShipToAndFromValidation() {
    }
    ShipToAndFromValidation.shipToAndFromValid = function (_a) {
        var attributeList = _a.attributeList, nodeList = _a.nodeList;
        for (var shipIndex = 0; shipIndex < attributeList.length; shipIndex++) {
            var attribute = attributeList[shipIndex];
            if (!(this.attributeIsInTheNode({ element: attribute, nodeList: nodeList }))) {
                return false;
            }
        }
        return true;
    };
    ShipToAndFromValidation.attributeIsInTheNode = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
            var shipNode = nodeList[nodeIndex];
            if (element.getName() === shipNode.nodeName) {
                if (shipNode.nodeName === "Address") {
                    var addressNodes = shipNode.childNodes;
                    for (var x = 0; x < addressNodes.length; x++) {
                    }
                    var addressAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShipFromAddressAttributes;
                    if (!(this.shipToAndFromValid({ attributeList: addressAttributes, nodeList: addressNodes }))) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    };
    ShipToAndFromValidation.isAddressValid = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
            var nodeElement = nodeList[nodeIndex];
            if (nodeElement.nodeName === element.getName()) {
                return true;
            }
        }
        return false;
    };
    return ShipToAndFromValidation;
}());
exports.ShipToAndFromValidation = ShipToAndFromValidation;
