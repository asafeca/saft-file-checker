import { SaftNamedParameters } from "../../components/commons/NamedParameters";
export declare class SaftAttributeModel {
    private name;
    private type;
    private isParent;
    constructor({ name, type, isParent }: SaftNamedParameters);
    setName(name: string): void;
    setType(type: string): void;
    setIsParent(isParent: boolean): void;
    getName(): string;
    getType(): string;
    getIsParent(): boolean;
}
