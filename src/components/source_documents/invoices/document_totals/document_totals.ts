import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
import { SaftAttributeList } from "../../../commons/saft_attributes_list";
import { CurrencyValidation } from "./currency";

export class DocumentTotalsValidation{
    static isDocumentTotalsValid({totalsAttributes, totalsNodes}:{
        totalsAttributes:Array<SaftAttributeModel>, totalsNodes: NodeListOf<ChildNode>}):boolean{
            for(let attrIndex = 0; attrIndex < totalsAttributes.length; attrIndex++){

                const element =totalsAttributes[attrIndex]

                if(!(this.attributeIsInTheNode({element, totalsNodes}))){

                    return false

                }

            }


        return true
    }


    private static attributeIsInTheNode({element,totalsNodes}:
        {element:SaftAttributeModel,totalsNodes: NodeListOf<ChildNode>}):boolean{
            if(element.getName() === "Currency"){

                const currencyNodes = totalsNodes
                const currencyAttributes = SaftAttributeList.CurrencyAttributes

               return  CurrencyValidation.isCurrencyValidation({attributeList:currencyAttributes, currencyNodes})

            }
         

                for(let nodeIndex = 0; nodeIndex< totalsNodes.length; nodeIndex++){
                    let currentNode = totalsNodes[nodeIndex]
    
                        if(currentNode.nodeName === element.getName()){
                     
                            return true

                        }
                   
    
                }

            


         return false

    }
}