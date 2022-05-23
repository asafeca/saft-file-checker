import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel"
import { SaftAttributeList } from "../commons/saft_attributes_list"
import { InvoiceValidation } from "./invoices/invoice"

export class SalesInvoices{

   static isSalesInvoicesValid({nodeList}:{nodeList:NodeListOf<ChildNode>}):boolean{
       const salesInvoicesAttributes = SaftAttributeList.SalesInvoicesAttributes

   for(let salesAttrIndex=0; salesAttrIndex <  salesInvoicesAttributes.length;salesAttrIndex++){

    const saleInvoiceAttr = salesInvoicesAttributes[salesAttrIndex]

    // LET'S VALIDATE EACH SALESINVOICES ATTRIBUTE

    if(!(this.attributeExistsInTheNode({element:saleInvoiceAttr, nodeList:nodeList}))){
        return false
    }   


       
   }




        return true
    }


    private static attributeExistsInTheNode({element, nodeList}:
        {element:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):boolean{
            for(let nodeIndex =0; nodeIndex< nodeList.length;nodeIndex++){
                
               if(nodeList[nodeIndex].nodeName !== "#text"){
                
                if(nodeList[nodeIndex].nodeName === element.getName()){

                    if(nodeList[nodeIndex].nodeName === "Invoice"){
                        
                        if(!(nodeList[nodeIndex].childNodes.length - 1 <=0)){
                        const invoiceNodes = nodeList[nodeIndex].childNodes

                            if(!(InvoiceValidation.isInvoiceValid({nodeList:invoiceNodes}))){
                                return false
                            }
                            
                        }
                        else{

                            return false

                        }

                        

                    }
                    

                }
               

               }

            }

          

            return true

    }
}