export class TaxExemption{


     static validateExemptions(nodeList:NodeListOf<ChildNode>):boolean{
        const code = this.checkExemptionReasonOrCode({param:"TaxExemptionCode", nodeList})
        const reason = this.checkExemptionReasonOrCode({param:"TaxExemptionReason", nodeList})

        if(reason  && !code){
            return false
        }
       else if(!reason && code){
            return false
        }

    
        return true
    
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