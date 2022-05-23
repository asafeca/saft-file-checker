import { SaftAttributeList } from "../commons/saft_attributes_list";
import { SourceDocumentsValidation } from "./source_documents_validation";

export class SourceDocuments{
private childNode:ChildNode;

constructor(childNode:ChildNode){
    this.childNode = childNode;
}
     isSourceDocumentsValid():boolean{
        if(this.childNode !==null && this.childNode !== undefined && this.childNode.hasChildNodes()){
      
            let sourceAttributes = SaftAttributeList.SourceDocumentsAttributes
                if(!(new SourceDocumentsValidation().childNodeChildrenMatch({childNode:this.childNode, matchList: sourceAttributes}))){
                   
                    return false
                }

                return true

        }

        return false;


       
    }



}