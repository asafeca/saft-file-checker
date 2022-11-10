import { SaftAttributeModel } from '../../../domain/models/HeaderAttributeModel';
import { IDataResult } from '../../commons/iresult';
export declare class ShipToAndFromValidation {
    static shipToAndFromValid({ attributeList, nodeList, }: {
        attributeList: SaftAttributeModel[];
        nodeList: NodeListOf<ChildNode>;
    }): IDataResult;
    private static attributeIsInTheNode;
}
