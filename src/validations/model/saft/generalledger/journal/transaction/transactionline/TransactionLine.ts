import { TransactionCreditLine } from "./TransactionCreditLine";
import { TransactionDebitLine } from "./TransactionDebitLine";

export class TransactionLine {
    public debitLine!: TransactionDebitLine;
    public creditLine!: TransactionCreditLine;
}