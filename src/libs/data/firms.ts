export interface Firm{
    logoText: string
    logo?: string
}

export const firms: { [key: string]: Firm } = {
    FTMO: {
        logoText: "/images/firms/FTMO/FTMO-logo-500x250.webp",
        logo: "/images/firms/FTMO/FTMO-logo-250x250.webp"
    },
    TFT: {
        logoText: "/images/firms/TFT/TFT-logo-500x250.webp",
        logo: "/images/firms/TFT/TFT-logo-250x250.webp"
    },
    FundedNext: {
        logoText: "/images/firms/FundedNext/FundedNext-logo-500x250.webp",
        logo: "/images/firms/FundedNext/FundedNext-logo-500x250.webp"
    },
    BlueGuardian: {
        logoText: "/images/firms/BlueGuardian/Blue-guardian-logo-500x250.webp",
        logo: "/images/firms/BlueGuardian/Blue-guardian-logo-400x400.webp"
    },
    GFT: {
        logoText: "/images/firms/GFT/GFT-logo-500x250.webp",
        logo: "/images/firms/GFT/GFT-logo-400x400.webp"
    }
}