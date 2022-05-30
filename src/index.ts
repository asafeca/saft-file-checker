import { SaftFileParser } from "./domain/SaftFileParser";
import * as fs from "fs"
import { SaftFileParserImpl } from "./domain/SaftFileParserImpl";

export function parseFile() {

  let content = fs.readFileSync("test.xml");
  const dataView = new Uint8Array(content);
  let parser: SaftFileParser = new SaftFileParserImpl();

  let result = parser.parse(dataView)
  console.log(`The result is --> ${result.message}`);


}

parseFile()

/*

const specials = new RegExp("^[^<>%$*,;'^']*$|^[^a-zA-Z]*$")
const regex = new RegExp(specials)

const isCorrect =  new RegExp("^[^a-zA-Z]*$").test("52") && new RegExp("^[^<>%$*,;'^'@'{}'%''-''+'#`]*$").test("52")
const right = new Date("2021-10-26T09:51:24")

console.log(right)

*/












//https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d