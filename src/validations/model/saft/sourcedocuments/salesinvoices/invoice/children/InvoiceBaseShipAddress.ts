import { SaftAddress } from "../../../../common/SaftAddress"

export class InvoiceBaseShipAddress {
    public deliveryId!: string
    public deliveryDate!: string
    public warehouseId!: string
    public locationId!: string
    public address!: SaftAddress
}