import { SaftAttributeModel } from '../../domain/models/HeaderAttributeModel';
export declare class ContentTypeValidation {
    static isContentValid({ typeModel, content }: {
        typeModel: SaftAttributeModel;
        content: string;
    }): boolean;
    private static isIntegerCorrect;
    private static isDateValid;
    private static isFloatValid;
}
