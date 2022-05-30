export interface IDataResult{
     message:string
     success:boolean
}


export class DataResult implements IDataResult{
     message: string
     success: boolean
     constructor({message, success}:{message:string,success:boolean}){
          this.message = message
          this.success = success

     }

}