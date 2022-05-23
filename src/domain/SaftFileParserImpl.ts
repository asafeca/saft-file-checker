import { SaftFileParser } from "./SaftFileParser";
import * as fs from "fs";
import * as os from "os"
import {DOMParser} from "xmldom"
import { SaftHeader } from "../components/header/Header";
import { MasterFiles } from "../components/masterfiles/masterfiles";
import { SourceDocuments } from "../components/source_documents/sourcedocuments";
import { Utils } from "../components/commons/utils";


export class SaftFileParserImpl implements SaftFileParser{

  public  xmlParser = new DOMParser();

   systemInformation():NodeJS.Platform  {

  return  os.platform();
      
   }
    parse(file: Uint8Array):string{

    const MAX = 99999;
    let  DATA_RESULT ="Ficheiro válido";
    let randomFileName = Math.max(Math.random()*MAX)
      fs.writeFileSync(randomFileName.toString(), file)

    //LET'S PARSE THE FILE
   const buffer = fs.readFileSync(randomFileName.toString())
   const stringBuffer = buffer.toString("utf8");
   let xmlDocument = this.xmlParser.parseFromString(stringBuffer, "application/xml");


  Utils.forEach(xmlDocument as any, (root) => {
      if (!root.nodeName || root.nodeName == "#text") return;
      if(root.nodeName === "AuditFile"){
        // GET ALL CHILDREN FORM AUDITFILE
        Utils.forEach(root, (auditFile)=>{
          if(!auditFile.nodeName || auditFile.nodeName !=="#text"){
            // CHECKING AND VALIDATE HEADER
            if(auditFile.nodeName === "Header"){
              if(!(new SaftHeader(auditFile).isHeaderValid())) {
                DATA_RESULT = "Ficheiro inválido [HEADER]"
              }
            }
            // CHECKING AND VALIDATE MASTERFILES
            else if(auditFile.nodeName === "MasterFiles"){
              if(!(new MasterFiles(auditFile).isMasterFileValid())){
                DATA_RESULT = "Ficheiro inválido [MasterFIles]"
              }
            }
            else if(auditFile.nodeName === "SourceDocuments"){
             if(!(new SourceDocuments(auditFile).isSourceDocumentsValid())){
               DATA_RESULT = "Ficheiro Inválido [SourceDocuments]"
             }

            }
          }

        })

      }

   })

   return DATA_RESULT;
        
    }
    
}

