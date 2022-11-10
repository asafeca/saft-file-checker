import { StockMovement } from "./stockmovement/StockMovement"

export class MovementOfGoods {

    public numberOfMovementLines!: string
    public totalQuantityIssued!: string
    public stockMovement!: Array<StockMovement>

}