import { Reporte } from "../domain/models/reporte";
import { XmlHandler } from "./xml_handler";
import { StringHelper } from "../utils/string_helpers";

export class FileParser {

    static parse(file: Uint8Array, reporte: Reporte): any {

        const xmlHandler = new XmlHandler(file);

        let object: Map<String, any> = new Map();

        object.set('generalLedgerEntries', this.buildObject(xmlHandler, xmlHandler.selectOne('GeneralLedgerEntries'), new Array<string>()))
        object.set('header', this.buildObject(xmlHandler, xmlHandler.selectOne('Header'), new Array<string>()))
        object.set('masterFiles', this.buildObject(xmlHandler, xmlHandler.selectOne('MasterFiles'),
            new Array<string>('Customer', 'Product', 'Supplier', 'TaxTableEntry')))

        object.set('sourceDocuments', this.buildObject(xmlHandler, xmlHandler.selectOne('SourceDocuments'),
            new Array<string>('Invoice', 'Line', 'WorkDocument', 'TaxTableEntry')))

        console.log(object)

        return object

    }


    private static buildObject(xmlHandler: XmlHandler, root: ChildNode, buildAsList: string[]): Map<string, any> {
        let object: Map<string, any> = new Map()

        if (root !== undefined && root !== null) {

            const nodes = root.childNodes

            for (const key of Object.keys(nodes)) {
                const node = nodes.item(key as any)
                if (node.nodeName !== '#text' && node.nodeName !== undefined && node.nodeName !== null) {

                    const item = buildAsList.find(item => item === node.nodeName)

                    if (item !== undefined && node.nodeName !== null && item === node.nodeName) {


                        const children = xmlHandler.selectAll(root, node.nodeName)
                        let objects: Array<Map<string, any>> = new Array()

                        if (children) {

                            for (const _key of Object.keys(children)) {
                                const element = children.at(_key as any)
                                objects.push(this.buildObject(xmlHandler, element as ChildNode, buildAsList))

                            }

                            object.set(StringHelper.firstCharToLowerCase(node.nodeName), objects)


                            continue
                        }


                        continue

                    }


                    if (xmlHandler.hasChildren(node)) {

                        object.set(StringHelper.firstCharToLowerCase(node.nodeName), this.buildObject(xmlHandler, node, buildAsList))

                        continue

                    }


                    object.set(StringHelper.firstCharToLowerCase(node.nodeName), node.textContent)
                    continue

                }
            }



            return object

        }


        return object



    }


}