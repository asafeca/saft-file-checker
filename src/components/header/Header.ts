import { IOException } from "../commons/exceptions";
import { DataResult, IDataResult } from "../commons/iresult";
import { SaftAttributeList } from "../commons/saft_attributes_list";
import { SaftValidation } from "../commons/saft_validation";

/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
export class SaftHeader{
   

 static isHeaderValid(nodeList:NodeListOf<ChildNode>):IDataResult{
         if(!(nodeList.length -1 <=0 )){

       // CHECK HEADER ATTRIBUTES
         let dataList= SaftAttributeList.HeaderAttributes;
           return SaftValidation.checkHeaderAttributeList({attributeList: dataList, nodeList})
         }
         else{
            return new DataResult({message:`Ficheiro inválido. HEADER inválido`, success:false})
         }

}

}
