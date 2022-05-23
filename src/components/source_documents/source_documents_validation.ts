import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
import { SaftAttributeList } from "../commons/saft_attributes_list";
import { Utils } from "../commons/utils";
import { InvoiceValidation } from "./invoices/invoice";
import { SalesInvoices } from "./sales_invoices";

export class SourceDocumentsValidation{

    childNodeChildrenMatch({childNode,matchList}:{childNode:ChildNode,matchList:Array<SaftAttributeModel>}):boolean{
        for(let k =0; k < matchList.length; k++){
            let entry = matchList[k]
            if(!(this.isElementValid({element: entry, childNode:childNode}))){
                return false
            }
        }
   
        return true;
    }
   
     isElementValid({element, childNode}:
        {element: SaftAttributeModel,childNode:ChildNode}):boolean{
        for(let x =0; x < childNode.childNodes.length; x++){

            if(element.getName() ===  childNode.childNodes[x].nodeName){



                let sourceDocumentElement = childNode.childNodes[x]
                if(sourceDocumentElement.nodeName === "SalesInvoices"){
             
                    // IF DOES NOT HAVE VALID CHILDREN
                    if(!(sourceDocumentElement.childNodes.length -1 <= 0)){
                        let salesInvoicesNodes = sourceDocumentElement.childNodes
                        if(!(SalesInvoices.isSalesInvoicesValid({nodeList: salesInvoicesNodes}))){
                            return false
                        }

                    }else{return false}
              
                }
                
           }

        }
   
        return true;
   
    }




     

    }
