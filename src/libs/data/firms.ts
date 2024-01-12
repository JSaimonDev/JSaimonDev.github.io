export interface Firm{
    logoPromos?: string
    logoText: string
    logo?: string
    bgColor: string
    name: string
    link: string
    hasReview: boolean
}


export const firms: { [key: string]: Firm } = {
    FTMO: {
        name: "FTMO",
        logoText: "/images/firms/FTMO/FTMO-logo-500x250.webp",
        logoPromos: "/images/firms/FTMO/FTMO-logo-white-500x250.webp",
        logo: "/images/firms/FTMO/FTMO-logo-250x250.webp",
        bgColor: "#FFF",
        link: "https://ftmo.com/es/",
        hasReview: false
    },
    TFT: {
        name: "The Funded Trader",
        logoText: "/images/firms/TFT/TFT-logo-500x250.webp",
        logoPromos: "/images/firms/TFT/TFT-logo-white-500x250.webp",
        logo: "/images/firms/TFT/TFT-logo-250x250.webp",
        bgColor: "#0A2237",
        link: "https://thefundedtraderprogram.com/",
        hasReview: false
    },
    FundedNext: {
        name: "FundedNext",
        logoText: "/images/firms/FundedNext/FundedNext-logo-500x250.webp",
        logoPromos: "/images/firms/FundedNext/FundedNext-logo-white-500x250.webp",
        logo: "/images/firms/FundedNext/FundedNext-logo-250x250.webp",
        bgColor: "#FFF",
        hasReview: false,
        link: "https://fundednext.com/"
    },
    BlueGuardian: {
        name: "Blue Guardian",
        logoText: "/images/firms/BlueGuardian/Blue-guardian-logo-500x250.webp",
        logoPromos: "/images/firms/BlueGuardian/Blue-guardian-logo-white-500x250.webp",
        logo: "/images/firms/BlueGuardian/Blue-guardian-logo-400x400.webp",
        bgColor: "#FFF",
        link: "https://www.blueguardian.com/",
        hasReview: false
    },
    GFT: {
        name: "Goat Funded Trader",
        logoText: "/images/firms/GFT/GFT-logo-500x250.webp",
        logoPromos: "/images/firms/GFT/GFT-logo-white-500x250.webp",
        logo: "/images/firms/GFT/GFT-logo-400x400.webp",
        bgColor: "#002988",
        link: "https://goatfundedtrader.com/",
        hasReview: false
    }
}