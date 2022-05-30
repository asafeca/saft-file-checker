import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { DataResult, IDataResult } from "../../commons/iresult";
import { SaftAttributeList } from "../../commons/saft_attributes_list";

export class ShipToAndFromValidation{

    static shipToAndFromValid({attributeList, nodeList}:
        {attributeList:Array<SaftAttributeModel>, nodeList:NodeListOf<ChildNode>}):IDataResult{

            for(let shipIndex =0; shipIndex<attributeList.length; shipIndex++){
                const attribute = attributeList[shipIndex]
                const result = this.attributeIsInTheNode({element: attribute, nodeList})
                if(!(result.success)){
                    return result
                }
            }


            return new DataResult({message:"Ficheiro valido", success:true})

    }

    private static attributeIsInTheNode({element, nodeList}:
        {element: SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):IDataResult{
            
            for(let nodeIndex = 0; nodeIndex< nodeList.length; nodeIndex++){
                const shipNode = nodeList[nodeIndex]

                if(element.getName() === shipNode.nodeName){
                    if(shipNode.nodeName === "Address"){
                        const addressNodes = shipNode.childNodes
                        for(let x = 0; x < addressNodes.length; x++){
                        }
                        const addressAttributes = SaftAttributeList.ShipToAndShipFromAddressAttributes
                        const result = this.shipToAndFromValid({attributeList:addressAttributes, nodeList:addressNodes})
                        if(!(result.success)){
                            return result
                        }
                    }

                    return new DataResult({message:"Ficheiro valido", success:true})
                }

            }

        return new DataResult({message:`Ficheiro inválido. [${element.getName()}] não encontrado`, success:false})
    }


    private static isAddressValid({element, nodeList}:
        {element:SaftAttributeModel, nodeList:NodeListOf<ChildNode>}):IDataResult{
            for(let nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++){
                const nodeElement = nodeList[nodeIndex]

                if(nodeElement.nodeName === element.getName()){
                    return new DataResult({message:"Ficheiro valido", success:true})
                }


            }


            return new DataResult({message:`Ficheiro inválido. [${element.getName()}] não encontrado`, success:false})

    }

}