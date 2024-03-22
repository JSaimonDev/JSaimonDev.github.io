export interface List {
    name: string
    shortDescription?: string
    firms?: {id: string, notes?: string} []
}

export const softwareList: { [key: string]: List } = {
    tradingView: {
        name: "Tradigview",
        firms: [
            {
                id: 'Apex',
                notes: "Es posible operar desde Tradingview a través de Tradovate"
            }
        ]
    },
    mt4: {
        name: "Metatrader 4"
    },
    mt5: {
        name: "Metatrader 5"
    },
    DXTrade: {
        name: "DXTrade",
    },
    CTrader: {
     name:   "cTrader"
    },
    NijaTrader: {
        name: "NinjaTrader"
    },
    Quantoser: {
        name: "Quantower"
    },
    MatchTrader: {
        name: "Match Trader"
    }
}

export const instrumentList: { [key: string]: List } = {
        crypto: {
        name: "Crypto",
    },
    commodities: {
        name: "Materias primas"
    },
    forex: {
        name: "Divisas"
    },
    futures: {
        name: "Futuros"
    },
    index: {
        name: "Índices"
    },
    Stocks: {
        name: "Acciones"
    }
}

export const rulesList: { [key: string]: List } = {
     noSL: {
        name: "Stop loss",
        shortDescription: "No es necesario tener un stop loss"
    },
    noTimeLimit: {
        name: "Sin límite de tiempo",
        shortDescription: "Tómate todo el tiempo que necesites para terminar la prueba"
    },
    weekend: {
        name: "Fin de semana",
        shortDescription: "Está permitido mantener ordenes abiertas durante el fin de semana",
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
    },
    balanceBased: {
        name: "Drawdown basado en balance",
        shortDescription: "El nivel de drawdown máximo no aumenta cuando tus operación estan en positivo"
    },
    news: {
        name: "Noticias",
        shortDescription: "Está permitido operar durante las noticias de alto impacto"
    },
    EA: {
        name: "Empresas de fondeo que permiten Expert Advisors",
        shortDescription: "Se pueden usar Expert Advisors"
    },
    scalingL: {
        name: "Plan de escalado escalado",
        shortDescription: "La compañía tiene un plan de escalado"
    },
    swapFree: {
        name: "Swap free",
        shortDescription: "Opera si pagar comisiones swap"
    },
    tradeCopier: {
        name: "Trade copier",
        shortDescription: "Está permitido utilizar un trade copier para replicar tus operaciones en varias cuentas"
    }
}
