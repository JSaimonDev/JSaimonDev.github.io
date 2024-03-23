export interface List {
    name: string
    shortDescription?: string
    mainDescription: string
    firms?: {id: string, notes?: string} []
}

export const softwareList: { [key: string]: List } = {
    tradingView: {
        name: "Tradigview",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de Tradingview",
        firms: [
            {
                id: 'Apex',
                notes: "Es posible operar desde Tradingview a través de Tradovate"
            },
                        {
                id: 'Topstep',
                notes: "Es posible operar desde Tradingview a través de Tradovate"
            }
        ]
    },
    mt4: {
        name: "Metatrader 4",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de Metatrader 4",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "TTP"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "Audacity"
            }
        ]
    },
    mt5: {
        name: "Metatrader 5",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de Metatrader 5",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "The5ers"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "Audacity"
            }
        ]
    },
    DXTrade: {
        name: "DXTrade",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de DXTrade",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "SFT"
            }
        ]
    },
    cTrader: {
        name: "cTrader",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de cTrader",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            }
        ]
    },
    NinjaTrader: {
        name: "NinjaTrader",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de Ninja Trader",
        firms: [
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            }
        ]
    },
    Quantower: {
        name: "Quantower",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de Quantower",
        firms: [
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            }
        ]
    },
    MatchTrader: {
        name: "Match Trader",
        mainDescription: "Empresas de fondeo en las que se puede operar a través de MatchTrader",
        firms: [
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "FundingPips"
            },
            {
                id: "E8"
            }
        ]
    }
}

export const instrumentList: { [key: string]: List } = {
        crypto: {
        name: "Crypto",
            mainDescription: "Empresas de fondeo en las que se pueden operar criptomonedas",
        firms: [
            {
                    id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "E8"
            },
            
            ]
    },
    commodities: {
        name: "Materias primas",
        mainDescription: "Empresas de fondeo en las que se pueden operar materias primas",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    forex: {
        name: "Divisas",
        mainDescription: "Empresas de fondeo en las que se puede operar forex",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    futures: {
        name: "Futuros",
        mainDescription: "Empresas de fondeo en las que se pueden operar futuros",
        firms: [
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "DarwinexZero"
            }
        ]
    },
    index: {
        name: "Índices",
        mainDescription: "Empresas de fondeo en las que se pueden operar índices",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    stocks: {
        name: "Acciones",
        mainDescription: "Empresas de fondeo en las que se pueden operar acciones",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TTP"
            },
            {
                id: "TFF"
            },
            {
                id: "DarwinexZero"
            }
        ]
    }
}

export const rulesList: { [key: string]: List } = {
     noSL: {
        name: "Stop loss",
        shortDescription: "No es necesario tener un stop loss",
        mainDescription: "Empresas de fondeo en las que no es obligatorio utilizar stop loss",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers",
                notes: "Obligatorio solo en la cuenta Bootcamp"
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    noTimeLimit: {
        name: "Sin límite de tiempo",
        shortDescription: "Tómate todo el tiempo que necesites para terminar la prueba",
        mainDescription: "Empresas de fondeo en las que no hay límite de tiempo para pasar la prueba de evaluación",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT"
            },
            {
                id: "FundedNext",
                notes: "Solo en las cuentas Stellar y Express"
            },
            {
                id: "GFT",
                notes: "Solo en las cuentas Goat y No Time Limit"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF",
                notes: "Solo en la cuenta de 2 fases"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    weekend: {
        name: "Fin de semana",
        shortDescription: "Está permitido mantener ordenes abiertas durante el fin de semana",
        mainDescription: "Empresas de fondeo en las que está permitido mantener operaciones abiertas durante el fin de semana",
        firms: [
            {
                id: "FTMO",
                notes: "Solo disponible utilizando la cuenta swing"
            },
            {
                id: "TFT",
                notes: "Permitido excepto en las versión Regular de las cuentas Standard, Rapid y Dragon"
            },
            {
                id: "FundedNext",
                notes: "Permitido excepto en la cuenta Express Consistency"
            },
            {
                id: "BlueGuardian",
            },
            {
                id: "GFT",
            },
            {
                id:  "The5ers"
            },
            {
                id: "TTP",
                notes: "Permitido en CFDs, no en futuros"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT",
                notes: "Permitido solo en cuentas swing"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    // balanceBased: {
    //     name: "Drawdown basado en balance",
    //     shortDescription: "El nivel de drawdown máximo no aumenta cuando tus operación estan en positivo"
    // },
    news: {
        name: "Noticias",
        shortDescription: "Está permitido operar durante las noticias de alto impacto",
        mainDescription: "Empresas de fondeo en las que está permitido operar durante las noticias de alto impacto",
        firms: [
            {
                id: "FTMO",
                notes: "Permitido sólo durante la prueba"
            },
            {
                id: "TFT",
                notes: "Permitido en todas las pruebas. Restringido en la cuentas Regular"
            },
            {
                id: "FundedNext",
                notes: "Permitido excepto en la cuenta Express"
            },
            {
                id: "GFT",
                notes: "Permitido con restricciones. Es posible tener posiciones abiertas pero no operar lo momentos de máxima volatilidad en noticias de alto impacto"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers",
                notes: "Permitido mantener posiciones. No permitide abrir o cerrar 2 minutos antes y después"
            },
            {
                id: "TTP",
                notes: "Restringido operar 2 minutos antes o después de noticias de alto impacto"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT",
                notes: "Solo permitido durante la prueba"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips",
                notes: "Restringido solo 2 minutos antes y despues de noticia de alto impacto. La operación no se ejecutara y no habrá violación de ninguna regla"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8",
                notes: "Permitido, pero las ganancias obtenidas en los momentos de mayor volatilidad pueden ser anuladas por no ser replicables"
            },
            {
                id: "Audacity"
            }
        ]
    },
    EA: {
        name: "Expert Advisor",
        shortDescription: "Se pueden usar Expert Advisors",
        mainDescription: "Empresas de fondeo en las que está permitido utilizar Expert Advisors (EA)",
        firms: [
            {
                id: "FTMO",
            },
            {
                id: "TFT",
                notes: "Permitido en las cuentas Dragon, Royal, Knight. En Standard solo con add-on"
            },
            {
                id: "FundedNext"
            },
            {
                id: "GFT"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers"
            },
            {
                id: "TTP"
            },
            {
                id: "SFT",
                notes: "Solo permitido en las cuentas Standard y Skilled"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders",
                notes: "Permitido límites. Consultar antes con ellos preferiblemente"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    },
    scaling: {
        name: "Plan de escalado escalado",
        shortDescription: "La compañía tiene un plan de escalado",
        mainDescription: "Empresas de fondeo en las que ofrecen programa de escalado de capital",
            firms: [
            {
            id: "FTMO",
                notes: "Hasta 2 millones de dólares y 90% de beneficio"
                },
                {
                    id: "TFT",
                    notes: "Hasta 1.5 millones de dólares y 90% de beneficio"
                },
                {
                    id: "FundedNext",
                    notes: "Hasta 4 millones de dólares"
                },
                {
                    id: "GFT",
                    notes: "Hasta 2 millones de dólares, 95% de beneficio, y 500$ de salario mensual"
                },
                {
                    id: "BlueGuardian",
                    notes: "Hasta 2 millones"
                },
                {
                    id: "The5ers",
                    notes: "Hasta 4 millones y 100% de beneficio"
                },
                {
                    id: "TTP",
                    notes: "Desafíos de 10 niveles. Cada nivel aumenta el tamaño de la cuenta (hasta 5 millones de dólares) y el beneficio (hasta 80%)"
                },
                {
                    id: "Topstep",
                    notes: "No es como las demás firmas. En Topstep el scaling plan limita la cantidad de contratos que puedes arriesgar dependiendo de tu cuenta"
                },
                {
                    id: "SFT",
                    notes: "Hasta 2 millones de dólares y 90% beneficio"
                },
                {
                    id: "TFF",
                    notes: "Hasta 2.5 millones de dólares y 90% beneficio"
                },
                {
                    id: "FundingPips",
                    notes: "Hasta 2 millones dólares y 90% de beneficio"
                },
                {
                    id: "FundingTraders",
                    notes: "Hasta 2 millones de dólares"
                },
                {
                    id: "DarwinexZero",
                    notes: "Sin límite"
                },
                {
                    id: "E8",
                    notes: "Hasta 1 millón de dólares"
                },
                {
                    id: "Audacity",
                    notes: "Escalado trimestral hasta 2 millones de dólares"
                }
        ]
    },
    // swapFree: {
    //     name: "Swap free",
    //     shortDescription: "Opera sin pagar comisiones swap",
    //     firms: [
    //         {
    //             id: ""
    //         }
    //     ]
    // },
    tradeCopier: {
        name: "Trade copier",
        shortDescription: "Está permitido utilizar un trade copier para replicar tus operaciones en varias cuentas",
        mainDescription: "Empresas de fondeo en las que está permitido utilizar herramientas para copiar tus propios trades entre cuentas",
        firms: [
            {
                id: "FTMO"
            },
            {
                id: "TFT",
                notes: "<b>Externamente:</b> Permitido solo como master.\<br><b>Internamente</b> Permitido en las cuentas Dragon, Royal, Knight y Standard(con add-on)"
            },
            {
                id: "FundedNext"
            },
            {
                id: "BlueGuardian"
            },
            {
                id: "The5ers",
            },
            {
                id: "TTP"
            },
            {
                id: "Topstep"
            },
            {
                id: "Apex"
            },
            {
                id: "SFT"
            },
            {
                id: "TFF"
            },
            {
                id: "FundingPips"
            },
            {
                id: "FundingTraders"
            },
            {
                id: "DarwinexZero"
            },
            {
                id: "E8"
            },
            {
                id: "Audacity"
            }
        ]
    }
}
