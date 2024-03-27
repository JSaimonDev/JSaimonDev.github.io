export interface Promotion {
    discount?: number
    benefits?: string[]
    benefitsShort?: string[]
    condition?: string
    code?: string
    endDate?: Date
    description?: string
    firmId: string

}

export const promotions: { [key: string]: Promotion[] } = {
    FTMO: [],
    TFT: 
    [
            {
            discount: 15,
            benefits: [
                "Bono de 125% basado en el precio de la prueba y conseguido en el tercer pago",
                "5% de beneficio en cada fase de la prueba. Se obtiene una vez conseguido un 5% en la cuenta fondeada",
                "Reparto de beneficios mejorado: Primer pago: 85%, segundo: 90%, tercero: 95%, siguientes: 80%",
                "Válido para cuentas de hasta 100.000$"
            ],
            benefitsShort: [
                "Bonus de 125%",
                "5% beneficio de cada fase",
                "Reparto de beneficios mejorado"
            ],
                code: "TFTMARCH3",
                endDate: new Date(2024, 3, 31),
                firmId: "TFT"
            },
            {
            discount: 8,
            benefits: [
                "4% de beneficio en cada fase de la prueba. Se obtiene en el segundo pago",
                "Reparto de beneficios mejorado: Primer pago: 82,5%, segundo: 85%, tercero: 90%, siguientes: 85%",
                "Válido para cuentas de hasta 100.000$"
            ],
            benefitsShort: [
                "4% beneficio de cada fase",
                "Reparto de beneficios mejorado"
            ],
                code: "TFTMARCH4",
                endDate: new Date(2024, 3, 31),
                firmId: "TFT"
            },
            {
            discount: 5,
            benefits: [
                "Bono de 125% basado en el precio de la prueba y conseguido en el tercer pago",
                "Reparto de beneficios mejorado: Primer pago: 80%, segundo: 85%, tercero: 90%, siguientes: 95%",
            ],
            benefitsShort: [
                "Bonus de 125%",
                "Reparto de beneficios mejorado"
            ],
                code: "TFTRAMADAN",
                endDate: new Date(2024, 4, 9),
                firmId: "TFT"
            },
            {
            discount: 50,
            benefits: [
                "Bono de 150% basado en el precio de la prueba",
                "5% de beneficio en cada fase de la prueba. Se obtiene en el segundo pago"
            ],
            benefitsShort: [
                "Bonus de 150%",
                "5% de beneficio en cada fase de la prueba"
            ],
                code: "TFTMARCH50",
                endDate: new Date(2024, 3, 31),
                firmId: "TFT"
            }
        ],
    FundedNext: [],
    BlueGuardian: [
        {
            discount: 25,
            benefits: [
                "Reembolso de 125% de la fase de prueba"
            ],
            benefitsShort: [
                "Reembolso de 125% de la fase de prueba"
            ],
            endDate: new Date(2024, 4, 1),
            code: "EASTER",
            firmId: "BlueGuardian"
        }

    ],
    GFT: [
        {
            discount: 50,
            benefits: ["Compra una prueba, y consigue otra gratis", "Sólo valido para cuentas Classic y No Time Limit de 2 fases",
                "Solo valido para los 400 primeros pedidos"],
            benefitsShort: ["Compra una prueba, y consigue otra gratis"],
            code: "BOGO50",
            firmId: "GFT"
        }
    ],
    The5ers: [
        {
            firmId: "The5ers",
            discount: 10,
            benefits: ["Sólo válido para la cuenta $10K Hyper Growth", "Un solo uso por persona"],
            code: "<a href='https://the5ers.com/the5ers-coupon/' style='color: #4cccd3;'>Link al cupón</a>",
        }
    ],
    TTP: [],
    Topstep: [],
    Apex: [
        {
            discount: 80,
            benefits: [
                "80% de descuento recurrente"
            ],
            benefitsShort: [
                "80% descuento recurrente"
            ],
            firmId: "Apex",
            code: "SAVENOW",
        }
    ],
    SFT: [
        {
            firmId: "SFT",
            benefits: [
                "Sólo valido para cuentas de hasta 25k", "Limitado a 5 usos por persona"
            ],
            benefitsShort: [
                "Válido para cuentas de hasta 25k"
            ],
            code: "RAMADAN2024",
            endDate: new Date (2024,4,9)
        },
        {
            firmId: "SFT",
            discount: 12.5,
            benefits: ["Reparto de beneficios 87,5%", "Solo para cuentas Skilled y Standard", "Sólo para cuentas 8% drawdown"],
            benefitsShort: ["Reparto de beneficios 87,5%"],
            code: "SKILLEDMARCH3",
            endDate: new Date(2024,3,31)
        },
        {
            firmId: "SFT",
            discount: 22.5,
            benefits: ["Reparto de beneficios 87,5%", "Solo para cuentas Skilled y Standard", "Sólo para cuentas 10% drawdown y hasta 100k"],
            benefitsShort: ["Reparto de beneficios 87,5%"],
            code: "SKILLEDMARCH4",
            endDate: new Date(2024,3,31)
        }

    ],
    TFF: [],
    FundingPips:  [],
    FundingTraders: [
        {
            firmId: "FundingTraders",
            code: "SPRING",
            discount: 35,
            benefits: ["Válido para todas las cuentas"],
            benefitsShort: ["Válido para todas las cuentas"]
        }
    ],
    DarwinexZero: [],
    E8: [],
    Audacity: [
        {
            discount: 10,
            firmId: "Audacity",
            benefits: [
                "Válido para cuentas 120k y 240k ability challenge"
            ],
            endDate: new Date(2024, 4, 10)
        }
    ]
}