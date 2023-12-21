export interface Selection {
    name: string
    shortDescription: string
    firms?: {id: string, notes?: string} []
}

export const softwareSelection: { [key: string]: Selection } = {
    tradingView: {
        name: "Empresas de fondeo compatibles con Tradigview",
        shortDescription: "Opera comodamente desde el software de analisis técnico más popular"
    },
        EA: {
        name: "Empresas de fondeo que permiten Expert Advisors",
        shortDescription: "Si eres trader algorítimco podrás operar en estas empresas"
    },
}

export const instrumentSelection: { [key: string]: Selection } = {
        crypto: {
        name: "Empresas de fondeo que ofrecen Criptomonedas",
        shortDescription: "Si te gusta el mundo crypto también tienes opciones para conseguir capital"
    },
}

export const featureSelection: { [key: string]: Selection } = {
     noSL: {
        name: "Cuentas fondeadas sin Stop Loss",
        shortDescription: "Cuentas y empresas en las que puedes operar ni necesidad de Stop Loss"
    },
    noTimeLimit: {
        name: "Pruebas de fondeo sin límite de tiempo",
        shortDescription: "Tómate todo el tiempo que necesites para pasar el challengue"
    },
    weekend: {
        name: "Cuentas que mantener posiciones en fin de semana",
        shortDescription: "Tener operaciones durante entre semanas puede ser imprescindible para algunos swing traders",
        firms: [
            {
                id: "FTMO",
                notes: "Solo disponible utilizando la cuenta swing"
            },
            {
                id: "TFT",
                notes: "Solo disponible en la cuenta royal y en las modalidad swind de las otras cuentas"
            },
            {
                id: "FundedNext",
                notes: "Permitido en todas las cuentas excepto en Express-consistency"
            },
            {
                id: "BlueGuardian",
            },
            {
                id: "GFT",
            }
        ]
    }
}

export const brokerSelection: { [key: string]: Selection } = {
    
}