import { DataResult, IDataResult } from "../../commons/iresult"

export class TaxExemption{


     static validateExemptions(nodeList:NodeListOf<ChildNode>):IDataResult{
        const code = this.checkExemptionReasonOrCode({param:"TaxExemptionCode", nodeList})
        const reason = this.checkExemptionReasonOrCode({param:"TaxExemptionReason", nodeList})

        if(reason  && !code){
            return new DataResult({message:`FIcheiro Inválido. [${code}] não encontrado`, success:false})
        }
       else if(!reason && code){
        return new DataResult({message:`FIcheiro Inválido. [${reason}] não encontrado`, success:false})
        }

        return new DataResult({message:"Ficheiro valido", success:true})
    
    }


    private static checkExemptionReasonOrCode({param,nodeList}:{param:string, nodeList:NodeListOf<ChildNode>}):boolean{

        for(let nodeIndex = 0; nodeIndex< nodeList.length; nodeIndex++){
            if(nodeList[nodeIndex].nodeName === param){
                return true
            }
        }

        return false

    }
}