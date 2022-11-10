export class StringHelper {

    static firstCharToLowerCase(strValue: string): string {

        strValue = strValue.replace(strValue.substring(0, 1), strValue.substring(0, 1).toLowerCase())

        return strValue

    }
}