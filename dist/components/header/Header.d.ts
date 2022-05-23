/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
export declare class SaftHeader {
    private header;
    constructor(header: ChildNode);
    isHeaderValid(): Boolean;
}
