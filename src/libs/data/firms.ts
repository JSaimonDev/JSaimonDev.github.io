export interface Firm{
logo: string
}

export const firms: { [key: string]: Firm } = {
    FTMO: {
        logo: "/images/firms/FTMO/FTMO-logo-500x250.jpg"
    },
    TFT: {
        logo: "/images/firms/TFT/TFT-logo-500x250.jpg"
    },
    FundedNext: {
        logo: "/images/firms/FundedNext/FundedNext-logo-500x250.jpg"
    }
}