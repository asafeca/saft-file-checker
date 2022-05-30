import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { DataResult, IDataResult } from "../../commons/iresult";
import { SaftAttributeList } from "../../commons/saft_attributes_list";
import { SaftValidation } from "../../commons/saft_validation";
import { WorkDocumentValidation } from "./work_document";

export class WorkingDocuments{


static isWorkingDocumentsValid({workingNodes}:{workingNodes:NodeListOf<ChildNode>}):IDataResult{
    const attributes = SaftAttributeList.WorkingDocumentsAttributes

    

    const result = SaftValidation.verifyAttributesInTheNodes({
        attributes, nodeList: workingNodes})
        if(!result.success){

            return result

        }


        for(let attrKey of Object.keys(attributes) ){
            const currentAttribute = attributes[attrKey as any]

            const result = this.findAttributeInTheNode({attribute: currentAttribute, nodeList: workingNodes})

            if(!result.success){
                return result
            }

        }


    return new DataResult({success:true, message:"Elemento válido"})

}

private static findAttributeInTheNode({attribute, nodeList}:
    {attribute:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):IDataResult{

        for(let nodeKey of Object.keys(nodeList)){
            const currentNode = nodeList[nodeKey as any]

            if(currentNode.nodeName === attribute.getName()){

                if(currentNode.nodeName === "WorkDocument"){
                    const attributes = SaftAttributeList.WorkDocumentAttributes
                    const workNodes = currentNode.childNodes
                    const result = SaftValidation.verifyAttributesInTheNodes({
                        attributes, nodeList: workNodes})

                        if(!result.success){
                            return result
                        }

                    const workResult = WorkDocumentValidation.isWorkDocumentValid(workNodes)
                    if(!workResult.success){
                        return workResult
                    }

                }

            }
        }




        return new DataResult({success:true, message:"Elemento válido"})

    }
}