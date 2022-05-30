import { DataResult, IDataResult } from "../commons/iresult";
import { SaftAttributeList } from "../commons/saft_attributes_list";
import { SaftValidation } from "../commons/saft_validation";
import { CustomerValidation } from "./customer";
import { TaxTableValidation } from "./tax_table";

export class MasterFiles{

   static  isMasterFileValid(nodeList:NodeListOf<ChildNode>):IDataResult{
       if(!(nodeList.length -1 <=0)){

           // VERIFY IF ALL ATTRIBUTES ARE IN THE NODE
           const attributes = SaftAttributeList.MasterfilesElements
           const masterResult = SaftValidation.verifyAttributesInTheNodes({attributes,nodeList})

           if(!(masterResult.success)){
               return masterResult
           }

           for(let masterKey of Object.keys(nodeList)){

            const currentNode = nodeList[masterKey as any]
    
            if(currentNode.nodeName === "Customer"){

                const result = CustomerValidation.isCustomerValid({customerNodeList: currentNode.childNodes})
                if(!(result.success)){
                    return result
                }
                
            }

            else if(currentNode.nodeName === "Product"){
                const productNodes = currentNode.childNodes
                const attributes = SaftAttributeList.ProductAttributes
                const result = SaftValidation.verifyAttributesInTheNodes({attributes, nodeList:productNodes})
                if(!result.success){
                    return result
                }
            }

            else if(currentNode.nodeName === "TaxTable"){
                const taxNodes = currentNode.childNodes
                const taxResult = TaxTableValidation.isTaxTableValid({nodeList: taxNodes})
                    if(!(taxResult.success)){

                        return taxResult

                    }

            }

           }

       }



        return new DataResult({success:true, message:`Ficheiro válido`});
    }
}