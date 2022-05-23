import { SaftValidation } from "../commons/saft_validation";

export class SaftCompanyAddress{
     private address:ChildNode
    constructor(address:ChildNode){
        this.address = address
    }

    isCompanyAddressValid():Boolean{
        if(this.address !==null &&  this.address!==undefined){
            for(let x = 0;x< this.address.childNodes.length;x++){
                if(this.address.childNodes[x].nodeName !=="#text"){
                        if(!(SaftValidation.isString(this.address.childNodes[x].textContent))){

                            return false;
                        }
                }
         
            }
            return true;
        }

       return false

    }

}