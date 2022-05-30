import { DataResult, IDataResult } from "../../../commons/iresult";
import { SaftAttributeList } from "../../../commons/saft_attributes_list";
import { SaftValidation } from "../../../commons/saft_validation";

export class DocumentTotalsValidation{
    static isDocumentTotalsValid({totalsNodes}:
        {totalsNodes: NodeListOf<ChildNode>}):IDataResult{

            const currencyExists = this.currencyExistsInTheNode(totalsNodes);

            // IF CURRENCY DOES NOT EXIST
            if(!currencyExists){
                const attributes = SaftAttributeList.DocumentTotalsSimpleAttributes
                const totalsResult = SaftValidation.verifyAttributesInTheNodes(
                    {attributes, nodeList: totalsNodes})

                if(!totalsResult.success){
                    return totalsResult
                }
            }

            // CURRENCY EXISTS
            
            else if(currencyExists){

                const attributes = SaftAttributeList.DocumentTotalsWithCurrencyAttributes
                const currencyResult = SaftValidation.verifyAttributesInTheNodes({
                    attributes: attributes, nodeList:totalsNodes})

                if(!currencyResult.success){
                    return currencyResult
                }

                else{

                    for(let totalKey of Object.keys(totalsNodes)){
                        const currentNode = totalsNodes[totalKey as any]

                        if(currentNode.nodeName==="Currency"){
                            const currencyNodes = currentNode.childNodes
                            if(!(currencyNodes.length-1 <=0)){
                                const currencyAttributes = SaftAttributeList.CurrencyAttributes
                                const currencyResult = SaftValidation.verifyAttributesInTheNodes({
                                    nodeList: currencyNodes, attributes:currencyAttributes})
    
                                if(!currencyResult.success){
                                    return currencyResult
                                }

                            }
                            else{
                                return new DataResult({message:`Elemento [Currency] inválido`, success:false})

                            }


                           


                            
                        }
                    }
                }

            }


        return new DataResult({message:"Elemento válido!", success: true})
    }



    private static currencyExistsInTheNode(nodeList: NodeListOf<ChildNode>):boolean{

        for(let nodeKey of Object.keys(nodeList)){
            const currentNode = nodeList[nodeKey as any]

            if(currentNode.nodeName === "Currency"){
                return true
            }
        }




        return false

    }




}