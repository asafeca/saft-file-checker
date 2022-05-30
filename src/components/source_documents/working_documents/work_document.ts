import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { DataResult, IDataResult } from "../../commons/iresult";
import { SaftAttributeList } from "../../commons/saft_attributes_list";
import { SaftValidation } from "../../commons/saft_validation";
import { DocumentTotalsValidation } from "../invoices/document_totals/document_totals";
import { WorkDocLineValidation } from "./line";

export class WorkDocumentValidation{
    static isWorkDocumentValid(workDocNodeList:NodeListOf<ChildNode>):IDataResult{
        const attributes = SaftAttributeList.WorkDocumentAttributes
        for(let attrKey of Object.keys(attributes)){
            const attribute = attributes[attrKey as any]

            const result = this.findAttributeInTheNode({attribute, nodeList: workDocNodeList})
            if(!result.success){
                return result
            }


        }


        return new DataResult({message:"Elemento válido!", success: true})

    }

    private static findAttributeInTheNode({attribute, nodeList}:
        {attribute:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):IDataResult{

            for(let nodeKey of Object.keys(nodeList)){
                const currentNode = nodeList[nodeKey as any]

                if(currentNode.nodeName === attribute.getName()){
                    if(currentNode.nodeName === "DocumentStatus"){
                        const docStatusNodes = currentNode.childNodes
                        const docStatusAttributes = SaftAttributeList.WorkDocDocumentStatusAttributes

                        const workDocResult =  SaftValidation.verifyAttributesInTheNodes({
                            nodeList: docStatusNodes, attributes: docStatusAttributes})
                          

                            if(!workDocResult.success){
                                return workDocResult
                            }
                    }

                else if(currentNode.nodeName === "Line"){
                    const lineNodes = currentNode.childNodes
                    const lineAttributes = SaftAttributeList.WorkDocLineAttributes
                    const lineResult = SaftValidation.verifyAttributesInTheNodes({
                        nodeList: lineNodes, attributes: lineAttributes})

                        if(!lineResult.success){
                            return lineResult
                        }

                    const lineResult1 = WorkDocLineValidation.isLineValid({
                        nodeList: lineNodes, attributes: lineAttributes })

                    if(!lineResult1.success){
                        return lineResult1
                    }

                 
                }

                else if(currentNode.nodeName === "DocumentTotals"){
                    const totalsNodes = currentNode.childNodes
                   const totalsResult =  DocumentTotalsValidation.isDocumentTotalsValid({totalsNodes})

                   if(!(totalsResult.success)){

                    return totalsResult

                   }
                }
                }
            }



            return new DataResult({success:true, message:"Elemento válido"})

    }
}