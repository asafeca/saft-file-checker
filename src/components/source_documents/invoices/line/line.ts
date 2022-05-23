import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel"
import { SaftAttributeList } from "../../../commons/saft_attributes_list"
import { TaxExemption } from "../tax_exemptions"
import { TaxValidation } from "./tax"

export class LineValidation{

    static isLineValid({attributeList,lineNodes}:
        {attributeList:Array<SaftAttributeModel>,lineNodes:NodeListOf<ChildNode>}):boolean{
        for(let attributeIndex = 0; attributeIndex < attributeList.length; attributeIndex++){
            let attribute = attributeList[attributeIndex]
        
            if(!(this.lineChildrenValid({element: attribute, lineNodes}))){
              
                return false
            }
        }

        return true
    }

    private static lineChildrenValid({element, lineNodes}:
        {element:SaftAttributeModel,lineNodes:NodeListOf<ChildNode>}):boolean{

            // THEY ARE OPTIONAL ATTRIBUTES
            if(element.getName() === "TaxExemptionReason" || element.getName()=== "TaxExemptionCode"){

            return TaxExemption.validateExemptions(lineNodes)
            }
            for(let nodeIndex = 0;nodeIndex< lineNodes.length; nodeIndex++){
                if(lineNodes[nodeIndex].nodeName === element.getName()){
                    const currentNode = lineNodes[nodeIndex]
                    if(currentNode.nodeName === "Tax"){
                        const taxNodes = currentNode.childNodes;
                        const taxAttributes = SaftAttributeList.LineTaxAttributes
                        if(!(TaxValidation.isTaxValid({taxAttributeList: taxAttributes, taxNodes: taxNodes}))){
                                
                        return false
                            
                        }

                        }

                     return true
                }
             
            }

            console.log(element.getName())

        return false
    }



}