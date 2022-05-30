import { DataResult, IDataResult } from "../commons/iresult";
import { SaftValidation } from "../commons/saft_validation";

export class SaftCompanyAddress{
     private address:ChildNode
    constructor(address:ChildNode){
        this.address = address
    }

    isCompanyAddressValid():IDataResult{
        if(this.address !==null &&  this.address!==undefined){
            for(let x = 0;x< this.address.childNodes.length;x++){
                const currentNode = this.address.childNodes[x]
                if(currentNode.nodeName !=="#text"){

                        if(!(SaftValidation.isString(this.address.childNodes[x].textContent))){

                            return new DataResult({
                                 message: `Ficheiro inválido [${currentNode.nodeName}] não encontrado`, 
                                 success:false});
                        }
                }
         
            }
            return new DataResult({message:"Ficheiro valido", success:true})
        }

       return new DataResult({
        message: `Ficheiro inválido [Address] não é válido`, 
        success:false});

    }

}