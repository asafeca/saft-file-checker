import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
export declare class SourceDocumentsValidation {
    childNodeChildrenMatch({ childNode, matchList }: {
        childNode: ChildNode;
        matchList: Array<SaftAttributeModel>;
    }): boolean;
    isElementValid({ element, childNode }: {
        element: SaftAttributeModel;
        childNode: ChildNode;
    }): boolean;
}
