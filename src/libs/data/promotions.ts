export interface Promotion {
    discount?: number
    benefits?: string[]
    benefitsShort?: string[]
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
            discount: 15,
            benefits: [
                "Bono de 125% basado en el tercer pago conseguido",
                "5% de beneficio en cada fase de la prueba. Se obtiene una vez conseguido un 5% en la cuenta fondeada",
                "Reparto de beneficios mejorado: Primer pago: 85%, segundo: 90%, tercero: 95%, siguientes: 80%",
                "Válido para cuentas de hasta 100.000$"
            ],
            benefitsShort: [
                "Bono de 125%",
                "5% beneficio de cada fase",
                "Reparto de beneficios mejorado"
            ],
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
    SFT: [],
    TFF: [],
    FundingPips:  [],
    FundingTraders: [],
    DarwinexZero: [],
    E8: [],
    Audacity: []
}