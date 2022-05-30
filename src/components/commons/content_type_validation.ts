import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";

export class ContentTypeValidation {


    static isContentValid({ typeModel, content }:
        { typeModel: SaftAttributeModel, content: string }): boolean {

        switch (typeModel.getType()) {

            case "string": if (content !== null && content !== undefined && content !== "") { return true } else { return false }
            case "date":{ 
                if(this.isDateValid(content)){

                    return Date.parse(content).toString() !== "NaN"
                  
                }

               return false

        }
            case "int": {

                if (this.isIntegerCorrect(content)) {

                    return Number.parseInt(content).toString() !== "NaN"
                }

                return false


            }
            case "decimal": {

                if(this.isFloatValid(content)){

                    return Number.parseFloat(content).toFixed(2).toString() !== "NaN"

                }

                return false
            
            }
            default: return true

        }
    }

    private static isIntegerCorrect(value: string): boolean {
        const characters = new RegExp("^[^a-zA-Z]*$")

        const specials = new RegExp("^[^<>$%{}_|ºª'-'*,;:@#`]*$")

        const isCorrect = (characters.test(value) && specials.test(value))
        return isCorrect

    }



    private static isDateValid(value:string):boolean{

        const characters = new RegExp("^[^a-zA-S]*$")
        const characters2 = new RegExp("^[^u-zU-Z]*$")
        const specials = new RegExp("^[^<>#|;ºª!,./'{}|_-~'^']*$")
   

        const isCorrect = (characters.test(value) && specials.test(value) && characters2.test(value))
        return isCorrect



    }
    

    private static isFloatValid(value:string):boolean{

        const characters = new RegExp("^[^a-zA-Z]*$")

        const specials = new RegExp("^[^<>%$@!|_:,/ºª~'^'-]*$")

        const isCorrect = (characters.test(value) && specials.test(value))
        return isCorrect

    }
}