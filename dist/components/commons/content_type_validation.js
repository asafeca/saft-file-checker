"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeValidation = void 0;
var ContentTypeValidation = /** @class */ (function () {
    function ContentTypeValidation() {
    }
    ContentTypeValidation.isContentValid = function (_a) {
        var typeModel = _a.typeModel, content = _a.content;
        switch (typeModel.getType()) {
            case "string": if (content !== null && content !== undefined && content !== "") {
                return true;
            }
            else {
                return false;
            }
            case "date": {
                if (this.isDateValid(content)) {
                    return Date.parse(content).toString() !== "NaN";
                }
                return false;
            }
            case "int": {
                if (this.isIntegerCorrect(content)) {
                    return Number.parseInt(content).toString() !== "NaN";
                }
                return false;
            }
            case "decimal": {
                if (this.isFloatValid(content)) {
                    return Number.parseFloat(content).toFixed(2).toString() !== "NaN";
                }
                return false;
            }
            default: return true;
        }
    };
    ContentTypeValidation.isIntegerCorrect = function (value) {
        var characters = new RegExp("^[^a-zA-Z]*$");
        var specials = new RegExp("^[^<>$%{}_|ºª'-'*,;:@#`]*$");
        var isCorrect = (characters.test(value) && specials.test(value));
        return isCorrect;
    };
    ContentTypeValidation.isDateValid = function (value) {
        var characters = new RegExp("^[^a-zA-S]*$");
        var characters2 = new RegExp("^[^u-zU-Z]*$");
        var specials = new RegExp("^[^<>#|;ºª!,./'{}|_-~'^']*$");
        var isCorrect = (characters.test(value) && specials.test(value) && characters2.test(value));
        return isCorrect;
    };
    ContentTypeValidation.isFloatValid = function (value) {
        var characters = new RegExp("^[^a-zA-Z]*$");
        var specials = new RegExp("^[^<>%$@!|_:,/ºª~'^'-]*$");
        var isCorrect = (characters.test(value) && specials.test(value));
        return isCorrect;
    };
    return ContentTypeValidation;
}());
exports.ContentTypeValidation = ContentTypeValidation;
