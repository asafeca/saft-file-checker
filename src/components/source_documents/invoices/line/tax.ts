import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";

export class TaxValidation{
    static isTaxValid({taxAttributeList,taxNodes}:
        {taxAttributeList:Array<SaftAttributeModel>,taxNodes:NodeListOf<ChildNode>}):boolean{
            for(let attributeIndex = 0; attributeIndex < taxAttributeList.length; attributeIndex++){
                let attribute = taxAttributeList[attributeIndex]
            
                if(!(this.taxChildValid({element: attribute, taxNodes}))){
                    return false
                }
            }



            return true

    }


    private static taxChildValid({element, taxNodes}:
        {element:SaftAttributeModel,taxNodes:NodeListOf<ChildNode>}):boolean{

            for(let nodeIndex = 0; nodeIndex<taxNodes.length; nodeIndex++){
                const taxNode = taxNodes[nodeIndex]

                if(taxNode.nodeName === element.getName()){
                    return true
                }
            }

            console.log(element.getName())

            return false
        }
}