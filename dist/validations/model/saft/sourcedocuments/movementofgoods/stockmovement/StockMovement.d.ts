import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals";
import { StockMovementBaseAddress } from "./address/StockMovementBaseAddress";
import { StockMovementLine } from "./line/StockMovementLine";
import { StockMovementDocumentStatus } from "./StockMovementDocumentStatus";
export declare class StockMovement {
    documentNumber: string;
    codigoUnicoDocumento: string;
    documentStatus: StockMovementDocumentStatus;
    hash: string;
    hashControl: string;
    period: string;
    movementDate: string;
    customerId: string;
    supplierId: string;
    sourceId: string;
    eacCode: string;
    movementComments: string;
    shipTo: StockMovementBaseAddress;
    shipFrom: StockMovementBaseAddress;
    movementEndTime: string;
    movementStartTime: string;
    codigoIdentificacaoDocumento: string;
    line: Array<StockMovementLine>;
    documentTotals: SAFTDocumentTotals;
}
