export class Utils{
    static   forEach = (element: ChildNode, callback: (item: ChildNode, index: number) => void)=>{
        for (let i = 0; i < element.childNodes.length; i++) {
          callback(element.childNodes.item(i), i);          
        }
      }
}