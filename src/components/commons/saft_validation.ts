import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel"
import { SaftAttributeList } from "./saft_attributes_list";

export class SaftValidation{


   static  isString<T>(value:T):Boolean{

        return (typeof(value) === "string" || typeof(value)=== "number")
         && value !==null && 
         value !== undefined && value !==""
    }

     static checkHeaderAttributeList({ attributeList,childNode }:
           { attributeList: Array<SaftAttributeModel>;childNode:ChildNode}):boolean{
               for(let x =0; x < attributeList.length; x++){
              if(!(this.checkHeaderElement({element:attributeList[x], childNodes: childNode}))){
                   return false
              }
          }

          return true

     }


  private  static checkHeaderElement({element, childNodes}:
          {element:SaftAttributeModel;childNodes:ChildNode}):boolean{
               for(let x =0; x< childNodes.childNodes.length;x++){
                    let childNode = childNodes.childNodes[x]
                    if(element.getName() === childNode.nodeName){
                         if(element.getName()==="CompanyAddress"){
                              let companyAddressAttrListTemplate = SaftAttributeList.CompanyAddressAttributes
                              for(let k =0; k<companyAddressAttrListTemplate.length;k++){
                                   if(!(this.checkCompanyAddressAttr(childNode))){
                                        return false
                                   }

                              }
                            
                         }
                         return true
                    }
               }

           return false
     }

     private static checkCompanyAddressAttr(childNode:ChildNode):boolean{
          if(childNode.hasChildNodes()){
               let companyAddressAttrTemplate = SaftAttributeList.CompanyAddressAttributes
               for(let x = 0; x < companyAddressAttrTemplate.length;x++){
                   if(!(this.checkCompanyAddressAttrElement({element:companyAddressAttrTemplate[x], chilNode:childNode}))){
                        return false
                   }

               }
              
               return true
          }
          return false
     }




     private static checkCompanyAddressAttrElement({element, chilNode}:{element:SaftAttributeModel,chilNode:ChildNode } ):boolean{

          for(let x = 0; x < chilNode.childNodes.length; x++){
               let attrList = chilNode.childNodes;
               if(element.getName() === attrList[x].nodeName){
                    return true
               }
          }

          return false

     }


     childNodeChildrenMatch({childNode,matchList}:{childNode:ChildNode,matchList:Array<SaftAttributeModel>}):boolean{
     for(let k =0; k < matchList.length; k++){
        
         let taxEntry = matchList[k]
         if(!(this.isElementValid({element: taxEntry, childNode:childNode}))){
             return false
         }

     }

     return true;
 }

  isElementValid({element, childNode}:
     {element: SaftAttributeModel,childNode:ChildNode}):boolean{
     for(let x =0; x < childNode.childNodes.length; x++){
         if(element.getName() ===  childNode.childNodes[x].nodeName){
             return true;
         }
     }

     return false;

 }




}

  

