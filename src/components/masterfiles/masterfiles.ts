import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
import { SaftAttributeList } from "../commons/saft_attributes_list";
import { SaftValidation } from "../commons/saft_validation";

export class MasterFiles{
    private masterFileNode:ChildNode
    constructor(masterFileNode:ChildNode){
        this.masterFileNode = masterFileNode;

    }

     isMasterFileValid():boolean{
        if(this.masterFileNode!==null && this.masterFileNode!==undefined && this.masterFileNode.hasChildNodes()){
            let masterElements = SaftAttributeList.MasterfilesElements
            for(let x = 0; x<masterElements.length;x++){
                if(!(this.checkMasterElement({element: masterElements[x], childNode:this.masterFileNode}))){
                    return false;
                }
                
            }


            return true;

        }

        return false;
    }

    private checkMasterElement({element, childNode}:{element: SaftAttributeModel, childNode:ChildNode}):boolean{
        for(let k = 0; k< childNode.childNodes.length;k++){
            let child = childNode.childNodes[k];
            if(element.getName()===child.nodeName){
                if(child.hasChildNodes()){
                    if(element.getName() === "Customer"){
                        let customerAttrTemplateList = SaftAttributeList.CustomerAttributes
                        for(let x =0; x < customerAttrTemplateList.length; x++){
                            
                            if(!(this.checkCustomerElement({element: customerAttrTemplateList[x],customerNode:child}))){
                                return false;
                            }
                        }
                    }
                    else if(element.getName() === "Product"){

                        if(!(this.isProductValid({childNode: child}))){
                            return false
                        }

                    }
                    else if(element.getName() === "TaxTable"){
                        if(!(this.isTaxTableValid({childNode:child}))){
                            return false;
                        }
                    }

                }
                else{

                    return false;

                }

                
            }

        }

        return true;
    }

    private isProductValid({childNode}:{childNode:ChildNode}):boolean{
        let attrList = SaftAttributeList.ProductAttributes
         for(let k =0; k< attrList.length;k++){
             if(!(new SaftValidation().isElementValid({element:attrList[k], childNode:childNode}))){
                 return false
             }
         }


        return true
    }


    private checkCustomerElement({element,customerNode}:
        {element: SaftAttributeModel,customerNode:ChildNode}):boolean{
        for(let x =0; x< customerNode.childNodes.length;x++){
            if(customerNode.childNodes[x].nodeName !=="#text"){
                let currentNode = customerNode.childNodes[x]
                if(element.getName() === currentNode.nodeName){
                    if(currentNode.nodeName === "BillingAddress" || currentNode.nodeName === "ShipToAddress"){
                        if(!(this.isAddressValid(currentNode))){

                            return false;
                        }
                    }
                 
                    return true
                }
            }

        }

        return false;

    }

    private isAddressValid(childNode:ChildNode):boolean{
           if(!(new SaftValidation().childNodeChildrenMatch(
               {childNode:childNode, matchList: SaftAttributeList.BillingAndShipToAddressAttributes}))){
                   return false
               }


        return true;
    }


 

    private isTaxTableValid({childNode}:{childNode:ChildNode}):boolean{
    for(let x = 0; x < childNode.childNodes.length; x++){
        let attribute = childNode.childNodes[x]
        if(attribute.nodeName !=="#text"){
         let taxEntryList = SaftAttributeList.TaxTableEntryAttributes
        if(!(new SaftValidation().childNodeChildrenMatch({childNode:attribute,matchList:taxEntryList}))){
            return false;
        }
    }
        
    }

        return true

    }




}