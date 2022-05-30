import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
import { ContentTypeValidation } from "../commons/content_type_validation";
import { DataResult, IDataResult } from "../commons/iresult";
import { SaftAttributeList } from "../commons/saft_attributes_list";

export class CustomerValidation {

    static isCustomerValid({ customerNodeList }:
        { customerNodeList: NodeListOf<ChildNode> }): IDataResult {
        if (!(customerNodeList.length - 1 <= 0)) {

            const customerAttributes = SaftAttributeList.CustomerAttributes

            const result = this.checkCustomerChildren({ customerNodeList, customerAttributes })
            if (!result.success) {
                return result
            }


            return new DataResult({ message: "Ficheiro válidado com sucesso!", success: true })


        }

        return new DataResult({ message: "Ficheiro inválido! [Customer] inválido", success: false })




    }

    private static checkCustomerChildren({ customerNodeList, customerAttributes }:
        { customerNodeList: NodeListOf<ChildNode>, customerAttributes: Array<SaftAttributeModel> }): IDataResult {

        for (let attrKey of Object.keys(customerAttributes)) {
            const attribute = customerAttributes[attrKey as any]

            const result = this.isAttributeInTheNode({ attribute, customerNodeList })
            if (!(result.success)) {
                return result
            }





        }
        return new DataResult({ message: "Elemento válido.", success: true })

    }

    private static isAttributeInTheNode({ attribute, customerNodeList }:
        { attribute: SaftAttributeModel, customerNodeList: NodeListOf<ChildNode> }): IDataResult {

        for (let nodeKey of Object.keys(customerNodeList)) {
            const currentNode = customerNodeList[nodeKey as any]

            if (attribute.getName() === currentNode.nodeName) {

                if (attribute.getName() === "BillingAddress" || attribute.getName() === "ShipToAddress") {
                    const addressAttributes = SaftAttributeList.BillingAndShipToAddressAttributes
                    const addressNodes = currentNode.childNodes

                    let addressResult = this.checkCustomerChildren(
                        { customerNodeList: addressNodes, customerAttributes: addressAttributes })
                    if (!addressResult.success) {
                        return addressResult
                    }


                }

                const isContentValid = ContentTypeValidation.isContentValid({
                    typeModel: attribute, content: currentNode.textContent !== null ? currentNode.textContent : ""
                })
                if (!isContentValid) {

                    return new DataResult({ message: `Elemento ${attribute.getName()} com valor inválido`, success: false })
                }




                return new DataResult({ message: "Elemento válido", success: true })
            }
        }


        return new DataResult({ message: `Elemento inválido. [${attribute.getName()}] não encontrado!`, success: false })

    }
}