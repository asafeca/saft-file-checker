import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
import { DataResult, IDataResult } from "../../../commons/iresult";

export class TaxValidation{
    static isTaxValid({taxAttributeList,taxNodes}:
        {taxAttributeList:Array<SaftAttributeModel>,taxNodes:NodeListOf<ChildNode>}):IDataResult{
            for(let attributeIndex = 0; attributeIndex < taxAttributeList.length; attributeIndex++){
                let attribute = taxAttributeList[attributeIndex]

                const result = this.taxChildValid({element: attribute, taxNodes})
            
                if(!(result.success)){
                    return result
                }
            }



            return new DataResult({message:"Ficheiro valido", success:true})

    }


    private static taxChildValid({element, taxNodes}:
        {element:SaftAttributeModel,taxNodes:NodeListOf<ChildNode>}):IDataResult{

            for(let nodeIndex = 0; nodeIndex<taxNodes.length; nodeIndex++){
                const taxNode = taxNodes[nodeIndex]

                if(taxNode.nodeName === element.getName()){
                    return new DataResult({message:"Ficheiro valido", success:true})
                }
            }

            return new DataResult({success: false, message:`[${element.getName()}] não encontrado!`})
        }
}