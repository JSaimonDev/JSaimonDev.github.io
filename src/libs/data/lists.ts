export interface List {
    name: string
    shortDescription: string
}

export const lists: { [key: string]: List } = {
    noSL: {
        name: "Cuentas fondeadas sin Stop Loss",
        shortDescription: "Cuentas y empresas en las que puedes operar ni necesidad de Stop Loss"
    },
    noTimeLimit: {
        name: "Pruebas de fondeo sin límite de tiempo",
        shortDescription: "Tómate todo el tiempo que necesites para pasar el challengue"
    },
    EA: {
        name: "Empresas de fondeo que permiten Expert Advisors",
        shortDescription: "Si eres trader algorítimco podrás operar en estas empresas"
    },
    tradingView: {
        name: "Empresas de fondeo compatibles con Tradigview",
        shortDescription: "Opera comodamente desde el software de analisis técnico más popular"
    },
    crypto: {
        name: "Empresas de fondeo que ofrecen Criptomonedas",
        shortDescription: "Si te gusta el mundo crypto también tienes opciones para conseguir capital"
    },
    weekend: {
        name: "Cuentas que mantener posiciones en fin de semana",
        shortDescription: "Tener operaciones durante entre semanas puede ser imprescindible para algunos swing traders"
    }
}