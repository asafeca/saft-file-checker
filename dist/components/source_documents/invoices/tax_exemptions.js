"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxExemption = void 0;
var TaxExemption = /** @class */ (function () {
    function TaxExemption() {
    }
    TaxExemption.validateExemptions = function (nodeList) {
        var code = this.checkExemptionReasonOrCode({ param: "TaxExemptionCode", nodeList: nodeList });
        var reason = this.checkExemptionReasonOrCode({ param: "TaxExemptionReason", nodeList: nodeList });
        if (reason && !code) {
            return false;
        }
        else if (!reason && code) {
            return false;
        }
        return true;
    };
    TaxExemption.checkExemptionReasonOrCode = function (_a) {
        var param = _a.param, nodeList = _a.nodeList;
        for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
            if (nodeList[nodeIndex].nodeName === param) {
                return true;
            }
        }
        return false;
    };
    return TaxExemption;
}());
exports.TaxExemption = TaxExemption;
