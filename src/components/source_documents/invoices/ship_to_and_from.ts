import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { SaftAttributeList } from "../../commons/saft_attributes_list";

export class ShipToAndFromValidation{

    static shipToAndFromValid({attributeList, nodeList}:
        {attributeList:Array<SaftAttributeModel>, nodeList:NodeListOf<ChildNode>}):boolean{

            for(let shipIndex =0; shipIndex<attributeList.length; shipIndex++){
                const attribute = attributeList[shipIndex]
                if(!(this.attributeIsInTheNode({element: attribute, nodeList}))){
                    return false
                }
            }


            return true

    }

    private static attributeIsInTheNode({element, nodeList}:
        {element: SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):boolean{
            
            for(let nodeIndex = 0; nodeIndex< nodeList.length; nodeIndex++){
                const shipNode = nodeList[nodeIndex]

                if(element.getName() === shipNode.nodeName){
                    if(shipNode.nodeName === "Address"){
                        const addressNodes = shipNode.childNodes
                        for(let x = 0; x < addressNodes.length; x++){
                        }
                        const addressAttributes = SaftAttributeList.ShipToAndShipFromAddressAttributes
                        if(!(this.shipToAndFromValid({attributeList:addressAttributes, nodeList:addressNodes}))){
                            return false
                        }
                    }

                    return true
                }

            }

        return false
    }


    private static isAddressValid({element, nodeList}:
        {element:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):boolean{
            for(let nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++){
                const nodeElement = nodeList[nodeIndex]

                if(nodeElement.nodeName === element.getName()){
                    return true
                }


            }


            return false

    }

}