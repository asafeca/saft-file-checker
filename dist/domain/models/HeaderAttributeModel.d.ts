import { SaftNamedParameters } from "../../components/commons/NamedParameters";
export declare class SaftAttributeModel {
    private name;
    private type;
    private isPresent;
    constructor({ name, type, isPresent }: SaftNamedParameters);
    setName(name: string): void;
    setType(type: string): void;
    setIsPresent(isPresent: boolean): void;
    getName(): string;
    getType(): string;
    getIsPresent(): boolean;
}
