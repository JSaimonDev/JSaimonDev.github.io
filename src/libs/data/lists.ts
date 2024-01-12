export interface List {
    name: string
    shortDescription?: string
    firms?: {id: string, notes?: string} []
}

export const softwareList: { [key: string]: List } = {
    tradingView: {
        name: "Empresas de fondeo compatibles con Tradigview",
        shortDescription: "Opera comodamente desde el software de analisis técnico más popular"
    },
        EA: {
        name: "Empresas de fondeo que permiten Expert Advisors",
        shortDescription: "Si eres trader algorítimco podrás operar en estas empresas"
    },
}

export const instrumentList: { [key: string]: List } = {
        crypto: {
        name: "Empresas de fondeo que ofrecen Criptomonedas",
        shortDescription: "Si te gusta el mundo crypto también tienes opciones para conseguir capital"
    },
}

export const featureList: { [key: string]: List } = {
     noSL: {
        name: "Cuentas fondeadas sin Stop Loss",
        shortDescription: "Cuentas y empresas en las que puedes operar ni necesidad de Stop Loss"
    },
    noTimeLimit: {
        name: "Sin límite de tiempo",
        shortDescription: "Originalmente la mayoría de las pruebas de fondeo tenía un maximo de tiempo para superarlas, lo cual añade un extra de dificultad a los traders menos agresivos. Por suerte, hoy en día un gran número de empresas ofrecen pruebas sin límite de tiempo."
    },
    weekend: {
        name: "Operaciones abiertas durante el fin de semana",
        shortDescription: "Mantener operaciones durante muchos dias puede ser imprescindible para algunos swing traders",
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

export const brokerList: { [key: string]: List } = {
    
}