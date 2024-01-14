export type Info = {[key: string]: string}

export const info: {[key: string]: Info} = {
    FTMO: {
        hq: "Praga 1, Calle Purkynova 2121/3, 110 00, República Checa",
        foundation: "2015",
        ceo: "Otakar Suffner",
        brokers: "Broker propio",
        currency: "USD, GBP, EUR, CZK, CAD, AUD, CHF",
        fee: "Divisas: 3$/lote\n Acciones: 0,004%\n Metales: 0,001%\n Índices y crypto: 0",
        leverage: "1:100",
        instruments: "Divisas, índices, metales y acciones",
        platforms: "Metatrader 4, Metatrader 5, cTrader y DXTrade",
        phases: "2",
        maxAllocation: "400.000 $",
        maxSplit: "80% escalable hasta 90%",
        depositOptions: "Transferencia, tarjeta, crypto y Skrill",
        withdrawalOptions: "Transferencia, crypto y Skrill"
    }
}