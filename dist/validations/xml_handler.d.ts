export declare class XmlHandler {
    private xmlHandler;
    private document;
    private file;
    constructor(file: Uint8Array);
    private init;
    selectAll(root: ChildNode, nodeName: string): Array<Element>;
    selectOne(nodeName: string): ChildNode;
    hasChildren(node: ChildNode): Boolean;
}
