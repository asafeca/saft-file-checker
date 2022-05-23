import { SaftNamedParameters } from "../../components/commons/NamedParameters";

export class SaftAttributeModel{
 private  name:string 
  private  type: string
  private isPresent:boolean

   constructor({name,type,isPresent}:SaftNamedParameters){
      this.name = name;
      this.type = type;
      this.isPresent = isPresent;


   }

      // SETTING ATTRIBUTES

   public setName(name:string):void{

       this.name=name;

   }

   public setType(type:string):void{
    this.type=type
   }

   public setIsPresent(isPresent:boolean):void{
      this.isPresent=isPresent
   }


   // GETTING ATTRIBUTES

   public getName():string{

      return this.name;

   }

   public getType():string{
      return this.type;
   }

   public getIsPresent():boolean{
      return this.isPresent;
   }

}