import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { SaftAttributeList } from "../../commons/saft_attributes_list"
import { DocumentTotalsValidation } from "./document_totals/document_totals";
import { LineValidation } from "./line/line";
import { ShipToAndFromValidation } from "./ship_to_and_from";
import { TaxExemption } from "./tax_exemptions";

export class InvoiceValidation{
   static isInvoiceValid({nodeList}:{nodeList:NodeListOf<ChildNode>}):boolean{
    const invoiceAttributes = SaftAttributeList.InvoiceAttributes;

    for(let attrIndex = 0; attrIndex < invoiceAttributes.length; attrIndex++){
        let attribute = invoiceAttributes[attrIndex]

        // FIRST FIND THE ATTRIBUTE IN THE NODES
        if(!(this.isAttributeInTheNode({elementMatch:attribute,invoiceNodes: nodeList}))){
            console.log(attribute)
            return false
        }

        // CHECK IF THE ATTRIBUTES EXIST
        
        if(!(this.invoiceChildMatch({elementMatch:attribute, invoiceNodes:nodeList}))){
            return false
        }

    }

    return true
    }


    private static isAttributeInTheNode({elementMatch,invoiceNodes}:
        {elementMatch: SaftAttributeModel, invoiceNodes:NodeListOf<ChildNode>}):boolean{
            for(let nodeIndex = 0; nodeIndex < invoiceNodes.length; nodeIndex++){
                const nodeElement = invoiceNodes[nodeIndex]
                if(nodeElement.nodeName == elementMatch.getName()){

                    return true
                }
            }

            return false

    }

    private static invoiceChildMatch({elementMatch,invoiceNodes}:
        {elementMatch: SaftAttributeModel, invoiceNodes:NodeListOf<ChildNode>}):boolean{
        for(let invoiceIndex = 0; invoiceIndex < invoiceNodes.length; invoiceIndex++){
            const currentInvoiceNode = invoiceNodes[invoiceIndex];
            if(currentInvoiceNode.nodeName === elementMatch.getName()){
                if(currentInvoiceNode.nodeName === "DocumentStatus"){
                    let statusAttributes = SaftAttributeList.DocumentStatusAttributes
                    let docStatusNodes = currentInvoiceNode.childNodes
                    if(!(docStatusNodes.length -1 <=0)){
                        if(!(this.matchAttributeListWithNodeList(
                            {attributeList: statusAttributes, nodeList:docStatusNodes}))){
    
                            return false
                        }

                    }
                    else{return false}
 
                   
                }

                else if(currentInvoiceNode.nodeName === "SpecialRegimes"){
                    const regimeNodes = currentInvoiceNode.childNodes
                    const regimesAttributes  = SaftAttributeList.SpecialRegimesAttributes

                    if(!(regimeNodes.length -1 <=0)){

                        if(!(this.matchAttributeListWithNodeList(
                            {attributeList: regimesAttributes, nodeList:regimeNodes}))){
                                console.log("regimes invalid")
    
                            return false
                        }
    

                    }
                    else{return false}


                }


                if(currentInvoiceNode.nodeName === "ShipTo" || currentInvoiceNode.nodeName === "ShipFrom"){

                    // FIRST VALIDATE ALL NODES
                    const shipTo_FromNodes = currentInvoiceNode.childNodes;
                    const shipTo_FromAttributes = SaftAttributeList.ShipToAndShiFromAttributes

                    if(!(shipTo_FromNodes.length -1 <=0)){
                        if(!(ShipToAndFromValidation.shipToAndFromValid(
                            {attributeList: shipTo_FromAttributes, nodeList: shipTo_FromNodes}))){
                            return false
                        }

                    }
                    else{return false}

                }


                if(currentInvoiceNode.nodeName === "Line"){
                    const lineNodes = currentInvoiceNode.childNodes;
                    const lineAttributes = SaftAttributeList.LineAttributes
                    if(!(lineNodes.length - 1 <=0)){
                        
                      if(!(LineValidation.isLineValid({ attributeList:lineAttributes,lineNodes}))){
                          return false
   
                      }
                 

   
                    }
                    else{return false}

                }

                

                if(currentInvoiceNode.nodeName === "DocumentTotals"){
                    const totalsNodes = currentInvoiceNode.childNodes
                    const totalsAttributes = SaftAttributeList.DocumentTotalsAttributes

                    if(!(totalsNodes.length -1 <=0)){
                        if(!(DocumentTotalsValidation.isDocumentTotalsValid({totalsAttributes, totalsNodes}))){
                            return false

                        }
                    }
                    else{return false}

                }
    
        }

      

      

    }

      return true
}


    private static checkInvoiceChidrenAndSiblings({nodeList, attributeList}:
        
        {nodeList:NodeListOf<ChildNode>, attributeList:Array<SaftAttributeModel>}):boolean{
          
            for(let attrIndex = 0; attrIndex< attributeList.length;attrIndex++){

                let attribute = attributeList[attrIndex]; 
             

         /// CHECKING EXEMPTIONS
        
        if(attribute.getName() ==="TaxExemptionReason" 
        || attribute.getName() ==="TaxExemptionCode"){
            if(!(TaxExemption.validateExemptions(nodeList))){
                return false
            }
          
         }

        if(!(this.findAttributeOnNode({element:attribute, nodeList:nodeList}))){
                    return false
        }
    }
        return true


    }

    private static findAttributeOnNode({element, nodeList}:{element:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):boolean{

        if(element.getName() !== "TaxExemptionReason" && element.getName() !== "TaxExemptionCode"){

            for(let nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++){

                if(element.getName() === nodeList[nodeIndex].nodeName){
    
                    if(nodeList[nodeIndex].nodeName==="Address"){
    
                        let addressAttributes = SaftAttributeList.ShipToAndShipFromAddressAttributes
                        let addressNodes= nodeList[nodeIndex].childNodes
    
                        if(!(addressNodes.length - 1 <=0)){
                            if(!(this.checkInvoiceChidrenAndSiblings({nodeList:addressNodes, attributeList:addressAttributes}))){
                                return false
                            }
                        }
                        else{return false}
                    }
    
                   else if(nodeList[nodeIndex].nodeName === "Tax"){
                       let taxNodes = nodeList[nodeIndex].childNodes
                       let taxAttributes = SaftAttributeList.LineTaxAttributes 
    
                       if(!(taxNodes.length -1 <=0)){
                        if(!(this.checkInvoiceChidrenAndSiblings({nodeList: taxNodes, attributeList:taxAttributes}))){
                            return false
                        }
    
                       }
                       else{
                           return false
                       }
    
                    }

                    

                    else if(nodeList[nodeIndex].nodeName === "Currency"){

                        let currencyNodes = nodeList[nodeIndex].childNodes
                        let currencyAttributes = SaftAttributeList.CurrencyAttributes 

                       if(!(currencyNodes.length -1 <=0)){

                     
                        if(!(this.checkInvoiceChidrenAndSiblings({nodeList: currencyNodes, attributeList:currencyAttributes}))){
                            return false
                        }
    
                       }
                       else{
                           return false
                       }



                    }
                    return true
                }
    
            }

            console.log(element)


            return false
    

        }

        return true
        

    }

    private static matchAttributeListWithNodeList({attributeList, nodeList}:
        {attributeList:Array<SaftAttributeModel>, nodeList:NodeListOf<ChildNode>}):boolean{

            for(let attributeIndex = 0; attributeIndex < attributeList.length; attributeIndex++){
                const element = attributeList[attributeIndex]
                if(!(this.isElementFoundInTheNode({element, nodeList}))){
                    return false
                }

            }

            return true

    }



    private static isElementFoundInTheNode({element, nodeList}:
        {element: SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):boolean{
            for(let index = 0;index< nodeList.length; index++){
                if(nodeList[index].nodeName === element.getName()){

                    return true

                }
            }

        return false

    }


}