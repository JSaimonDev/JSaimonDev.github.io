export interface Firm{
    logoTextWhite?: string
    logoText: string
    logo?: string
    promotions?: Promotion[]
    bgColor: string
    name: string
    link: URL
}

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

export const firms: { [key: string]: Firm } = {
    FTMO: {
        name: "FTMO",
        logoText: "/images/firms/FTMO/FTMO-logo-500x250.webp",
        logoTextWhite: "/images/firms/FTMO/FTMO-logo-white-500x250.webp",
        logo: "/images/firms/FTMO/FTMO-logo-250x250.webp",
        bgColor: "#FFF",
        link: new URL("https://ftmo.com/es/")
    },
    TFT: {
        name: "The Funded Trader",
        logoText: "/images/firms/TFT/TFT-logo-500x250.webp",
        logoTextWhite: "/images/firms/TFT/TFT-logo-white-500x250.webp",
        logo: "/images/firms/TFT/TFT-logo-250x250.webp",
        bgColor: "#0A2237",
        link: new URL("https://thefundedtraderprogram.com/"),
        promotions: [
        {
            discount: 25,
            benefit1: "100% Bonus",
                benefit2: "12.5% beneficio de la evaluación",
            description: "100% coste de la prueba recuperado + 12.5% beneficio de la evaluación. Válido para todo tipo de cuentas",
            code: "TFTDECEMBER25",
            endDate: new Date(2023, 11, 31)
        }
    ]
    },
    FundedNext: {
        name: "Funded Next",
        logoText: "/images/firms/FundedNext/FundedNext-logo-500x250.webp",
        logoTextWhite: "/images/firms/FundedNext/FundedNext-logo-white-500x250.webp",
        logo: "/images/firms/FundedNext/FundedNext-logo-250x250.webp",
        bgColor: "#FFF",
        link: new URL ("https://fundednext.com/")
    },
    BlueGuardian: {
        name: "Blue Guardian",
        logoText: "/images/firms/BlueGuardian/Blue-guardian-logo-500x250.webp",
        logoTextWhite: "/images/firms/BlueGuardian/Blue-guardian-logo-white-500x250.webp",
        logo: "/images/firms/BlueGuardian/Blue-guardian-logo-400x400.webp",
        bgColor: "#FFF",
        link: new URL ("https://www.blueguardian.com/"),
        promotions: [
        {
            discount: 20,
            benefit1: "Reembolso del 100%",
            condition: "Solo cuentas Rapid y Unlimited",
            endDate: new Date(2023, 11, 31),
            code: "DEC1"
        }

    ]
    },
    GFT: {
        name: "Goat Funded Trader",
        logoText: "/images/firms/GFT/GFT-logo-500x250.webp",
        logoTextWhite: "/images/firms/GFT/GFT-logo-white-500x250.webp",
        logo: "/images/firms/GFT/GFT-logo-400x400.webp",
        bgColor: "#002988",
        link: new URL ("https://goatfundedtrader.com/"),
        promotions: [
        {
            discount: 17,
            benefit1: "135% Reembolso",
            code: "GFTDECEMBER17",
            endDate: new Date(2023, 11, 31),
            condition: "Solo cuentas 8K, 15k y 25k"
        }
    ]
    }
}