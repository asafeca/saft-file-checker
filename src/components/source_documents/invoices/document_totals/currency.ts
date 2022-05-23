import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";

export class CurrencyValidation{
    static isCurrencyValidation({attributeList, currencyNodes}:
        {attributeList:Array<SaftAttributeModel>, currencyNodes:NodeListOf<ChildNode>}):boolean{

            // FIRST CHECK IF CURRENCY EXISTS
            if(!this.isCurrencyInTheNode(currencyNodes)){

                return true

            }

            for(let attrIndex =0 ; attrIndex< attributeList.length; attrIndex++){
                const attribute = attributeList[attrIndex]

                if(!(this.isAttributeFoundInNode({element:attribute, currencyNodes}))){
                    console.log(`${attribute.getName()}   ::::::::::::::::::::::::HERE`)
               
                    return false
                }

                

                

            }

            return true

    }

   private static isAttributeFoundInNode({element, currencyNodes}:
        {element:SaftAttributeModel, currencyNodes:NodeListOf<ChildNode>}):boolean{

            if(element.getName() === "CurrencyCode" || 
            element.getName() === "CurrencyAmount" || 
            element.getName() === "ExchangeRate"){
           
                return true
            }

            for(let nodeIndex = 0; nodeIndex < currencyNodes.length; nodeIndex++){
                const currencyNode = currencyNodes[nodeIndex]
                if(currencyNode.nodeName === element.getName()){
                    return true
                }

            }

        return false
    }


    private static isCurrencyInTheNode(totalNodes:NodeListOf<ChildNode>):boolean{
        for(let index = 0; index < totalNodes.length; index++){
            const currentnode = totalNodes[index]
            if(currentnode.nodeName === "Currency"){

                return true
            }
        }


        return false
    }
}
