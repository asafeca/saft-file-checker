export class FieldRules {

    public ID!: Number;
    public DESIGNACAO!: string;
    public IS_OBRIGATORIO!: Number;
    public IS_TIPO_COMPLEXO!: Number;
    public TAMANHO!: string;
    public TIPO_DADO!: string;
    public ESTRUTURA_CAMPO_ID!: number;
    public TIPO_REPORTE_ID!: Number;
    public estruturaCampoObj: FieldRules = new FieldRules;

}