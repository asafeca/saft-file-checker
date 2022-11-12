import { Reporte } from "./reporte";

export class ErrorDetail {
    public campo!: string;
    public designacao!: string;
    public numeroLinha!: Number;
    public nomeFolha!: string;
    public reporte!: Reporte;
}