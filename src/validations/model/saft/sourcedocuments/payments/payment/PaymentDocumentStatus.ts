export class PaymentDocumentStatus {
    public paymentStatus!: string // SAFTPaymentStatus
    public paymentStatusDate!: string
    public reason!: string
    public sourceId!: string
    public sourcePayment!: string // SAFTSourcePayment
}