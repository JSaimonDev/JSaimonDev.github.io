export interface Promotion {
    discount?: number
    benefit1?: string
    benefit2?: string
    benefit3?: string
    condition?: string
    code?: string
    starDate?: Date
    endDate: Date
    description?: string
}

export type Firm = Promotion[]

export const promotions:{[key: string]: Firm} = {
    BlueGuardian: [
        {
            discount: 20,
            benefit1: "Reembolso del 100%",
            condition: "Solo cuentas Rapid y Unlimited",
            endDate: new Date(2023, 11, 31),
            code: "DEC1"
        }

    ],
    TFT: [
        {
            discount: 25,
            benefit1: "100% Bonus",
            benefit2: "12.5% beneficio de la evaluación",
            code: "TFTDECEMBER25",
            endDate: new Date(2023, 11, 31)
        }
    ],
    GFT: [
        {
            discount: 17,
            benefit1: "135% Reembolso",
            code: "GFTDECEMBER17",
            endDate: new Date(2023, 11, 31),
            condition: "Solo cuentas 8K, 15k y 25k"
        }
    ]
}