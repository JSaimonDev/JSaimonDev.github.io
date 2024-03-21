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
    logoUrl: string

}

export const promotions: { [key: string]: Promotion[] } = {
    FTMO: [],
    TFT: 
    [
            {
                discount: 25,
                benefit1: "100% Bonus",
                benefit2: "12.5% profit",
                description: "100% coste de la prueba recuperado + 12.5% beneficio de la evaluación. Válido para todo tipo de cuentas",
                code: "TFTDECEMBER25",
            endDate: new Date(2023, 11, 31),
                logoUrl: "images/firms/TFT/TFT-logo-white-500x250.webp"}],
    FundedNext: [],
    BlueGuardian: [
        {
            discount: 20,
            benefit1: "Reembolso del 100%",
            condition: "Solo cuentas Rapid y Unlimited",
            endDate: new Date(2023, 11, 31),
            code: "DEC1",
            logoUrl: "images/firms/BlueGuardian/Blue-guardian-logo-white-500x250.webp"
        }

    ],
    GFT: [
        {
            discount: 17,
            benefit1: "135% Reembolso",
            code: "GFTDECEMBER17",
            endDate: new Date(2023, 11, 31),
            condition: "Solo cuentas 8K, 15k y 25k",
            logoUrl: "images/firms/GFT/GFT-logo-white-500x250.webp"
        }
    ],
    The5ers: [],
    TTP: [],
    Topstep: [],
    Apex: [],
    STF: [],
    TFF: [],
    FundingPips:  [],
    FundingTraders: [],
    DarwinexZero: [],
    E8: [],
    Audacity: []
}