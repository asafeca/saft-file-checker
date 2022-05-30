import { SaftFileParser } from "./SaftFileParser";
import * as fs from "fs";
import * as os from "os"
import {DOMParser} from "xmldom"
import { SaftHeader } from "../components/header/Header";
import { MasterFiles } from "../components/masterfiles/masterfiles";
import { SourceDocuments } from "../components/source_documents/sourcedocuments";
import { DataResult, IDataResult } from "../components/commons/iresult";


export class SaftFileParserImpl implements SaftFileParser{

  public  xmlParser = new DOMParser();

   systemInformation():NodeJS.Platform  {

  return  os.platform();
      
   }
    parse(file: Uint8Array):IDataResult{

    const MAX = 99999;
    let randomFileName = Math.max(Math.random()*MAX)
      fs.writeFileSync(randomFileName.toString(), file)

    //LET'S PARSE THE FILE
   const buffer = fs.readFileSync(randomFileName.toString())
   const stringBuffer = buffer.toString("utf8");
   let xmlDocument = this.xmlParser.parseFromString(stringBuffer, "application/xml");

   const rootNodes = xmlDocument.childNodes
   if(!(rootNodes.length -1 <=0)){
     for(let rootIndex of Object.keys(rootNodes)){
       const rootElement = rootNodes[rootIndex as any]

       if(rootElement.nodeName !=="#text" && rootElement.nodeName !==undefined){

        if(rootElement.nodeName === "AuditFile"){
          const auditFileNodes = rootElement.childNodes
          
          for(let auditIndex of Object.keys(auditFileNodes)){
            let auditCurrentChild = auditFileNodes[auditIndex as any]

            // CHECKING HEADER
            if(auditCurrentChild.nodeName === "Header"){

              const result =  SaftHeader.isHeaderValid(auditCurrentChild.childNodes)

              if(!(result.success)){

                return result

              }

            }

            // CHECKING MASTERFILES  // CHECKING 
            
            else if(auditCurrentChild.nodeName === "MasterFiles"){
              const masterNodes = auditCurrentChild.childNodes

              const result = MasterFiles.isMasterFileValid(masterNodes)
              
              if(!(result.success)){
                return result
              }

            }
            else if(auditCurrentChild.nodeName=== "SourceDocuments"){
              const sourceNodes = auditCurrentChild.childNodes

              const result = SourceDocuments.isSourceDocumentsValid({sourceNodeList:sourceNodes})
              if(!result.success){
                return result
              }


            }


          }

        }
      

       }

     }

   }

   else{new DataResult({message:"Ficheiro inválido. Element ROOT não encontrado!", success:false})}


   return new DataResult({message:"Ficheiro valido", success:true})
        
    }
}

