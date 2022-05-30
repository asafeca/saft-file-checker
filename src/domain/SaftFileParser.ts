import { IDataResult } from "../components/commons/iresult"
import { IOException } from "../utils/IOException"

export interface SaftFileParser{
       parse(params:Uint8Array):IDataResult
       systemInformation():NodeJS.Platform 
}