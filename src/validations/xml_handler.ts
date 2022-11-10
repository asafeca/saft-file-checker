import { format } from 'prettier';
import { DOMParser } from 'xmldom'
export class XmlHandler {

    private xmlHandler = new DOMParser();
    private document!: HTMLElement

    private file: Uint8Array

    constructor(file: Uint8Array) {
        this.file = file

        this.init()

    }

    private init(): void {

        this.document = this.xmlHandler.parseFromString(this.file.toString(), 'application/xml').documentElement

    }


    selectAll(root: ChildNode, nodeName: string): Array<Element> {

        let elementList = new Array<Element>()

        const rootChildren = root.childNodes

        for (const key of Object.keys(rootChildren)) {

            const node = rootChildren.item(key as any)

            if (node.nodeName === nodeName) {
                elementList.push(node as Element)
            }


        }

        return elementList



    }







    selectOne(nodeName: string): ChildNode {

        const allNodes = this.document.childNodes
        let foundNode!: ChildNode

        for (const key of Object.keys(allNodes)) {
            const node = allNodes.item(key as any)
            if (node.nodeName !== '#text' && node.nodeName !== undefined) {

                if (node.nodeName.toLowerCase() === nodeName.toLowerCase()) {

                    foundNode = node

                    break;

                }

            }

        }

        return foundNode



    }




    hasChildren(node: ChildNode): Boolean {

        const firstChildNode = node.firstChild
        if (firstChildNode === null || firstChildNode === undefined)
            return false

        return node.firstChild?.nodeName === '#text' && node.childNodes.length > 1

    }

}