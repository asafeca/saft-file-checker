import { WorkDocument } from "./children/WorkDocument"

export class WorkingDocuments {
    public numberOfEntries!: string
    public totalDebit!: string
    public totalCredit!: string
    public workDocument!: Array<WorkDocument>
}