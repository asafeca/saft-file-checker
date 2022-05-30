import { DataResult, IDataResult } from "../../../commons/iresult";
import { SaftAttributeList } from "../../../commons/saft_attributes_list";
import { SaftValidation } from "../../../commons/saft_validation";


export class CurrencyValidation{

    static isCurrencyValid(totalsNodes:NodeListOf<ChildNode>):IDataResult{
        const currencyAttributes = SaftAttributeList.CurrencyAttributes

        for(let nodeKey of Object.keys(totalsNodes) ){
            const currentNode = totalsNodes[nodeKey as any]
            if(currentNode.nodeName === "Currency"){
                const currencyNodes = currentNode.childNodes

                if(!(currencyNodes.length -1 <=0)){

                    const currencyResult = SaftValidation.verifyAttributesInTheNodes({
                        attributes:currencyAttributes, nodeList: currencyNodes})
                        

                        if(!currencyResult.success){

                            
                            return currencyResult

                        }
                }

                else{
                    return new DataResult({message:"Elemento [Currency] inválido", success:false})
                }
            }
        }



        return new DataResult({message:"Elemento válido", success:true})

    }



    
}
