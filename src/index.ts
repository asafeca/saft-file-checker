import { SaftFileParser } from "./domain/SaftFileParser";
import * as fs from "fs"
import { SaftFileParserImpl } from "./domain/SaftFileParserImpl";

export  function parseFile(){

    let content = fs.readFileSync("test.xml");
    const dataView = new Uint8Array(content);
    let parser:SaftFileParser= new SaftFileParserImpl();
    
      let   result = parser.parse(dataView)
     console.log( `The result is --> ${result}`);

  
}

  parseFile()



//https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d