import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals"
import { StockMovementBaseAddress } from "./address/StockMovementBaseAddress"
import { StockMovementLine } from "./line/StockMovementLine"
import { StockMovementDocumentStatus } from "./StockMovementDocumentStatus"

export class StockMovement {
    public documentNumber!: string
    public codigoUnicoDocumento!: string
    public documentStatus!: StockMovementDocumentStatus
    public hash!: string
    public hashControl!: string
    public period!: string
    public movementDate!: string
    public customerId!: string
    public supplierId!: string
    public sourceId!: string
    public eacCode!: string
    public movementComments!: string
    public shipTo!: StockMovementBaseAddress
    public shipFrom!: StockMovementBaseAddress
    public movementEndTime!: string
    public movementStartTime!: string
    public codigoIdentificacaoDocumento!: string
    public line!: Array<StockMovementLine>
    public documentTotals!: SAFTDocumentTotals
}