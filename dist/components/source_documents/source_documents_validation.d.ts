import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
import { IDataResult } from "../commons/iresult";
export declare class SourceDocumentsValidation {
    childNodeChildrenMatch({ childNode, matchList }: {
        childNode: ChildNode;
        matchList: Array<SaftAttributeModel>;
    }): IDataResult;
    isElementValid({ element, childNode }: {
        element: SaftAttributeModel;
        childNode: ChildNode;
    }): IDataResult;
}
