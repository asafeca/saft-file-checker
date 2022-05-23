import { SaftAttributeList } from "../commons/saft_attributes_list";
import { SaftValidation } from "../commons/saft_validation";

/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
export class SaftHeader{
    private header:ChildNode;
    constructor(header:ChildNode){
        this.header = header;
    }

 isHeaderValid():Boolean{
     if(this.header !==null && this.header !== undefined){
         if(this.header.hasChildNodes()){

       // CHECK HEADER ATTRIBUTES
         let dataList= SaftAttributeList.HeaderAttributes;
          
        return  SaftValidation.checkHeaderAttributeList({attributeList: dataList, childNode: this.header})

         }

         return false;
 }

 return false 

}

}
