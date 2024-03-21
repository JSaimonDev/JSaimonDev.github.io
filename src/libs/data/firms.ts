export interface Firm{
    logoPromos?: string
    logoText: string
    logo?: string
    bgColor?: string
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
    },
    The5ers: {
        name: "The 5%ers",
        logoText: "/images/firms/The5ers/The5ers-logo-500x250.webp",
        logoPromos: "/images/firms/The5ers/The5ers-logo-white-500x250.webp",
        link: "https://the5ers.com/",
        hasReview: false
    },
    TTP: {
        name: "The Trading Pit",
        logoText: "/images/firms/TTP/TTP-logo-500x250.webp",
        logoPromos: "/images/firms/TTP/TTP-logo-white-500x250.webp",
        link: "https://www.thetradingpit.com/",
        hasReview: false
    },
    Topstep: {
        name: "Topstep",
        logoText: "/images/firms/Topstep/Topstep-logo-500x250.webp",
        logoPromos: "/images/firms/Topstep/Topstep-logo-white-500x250.webp",
        link: "https://www.topstep.com/",
        hasReview: false
    },
    Apex: {
        name: "Apex Trading Funding",
        logoText: "/images/firms/Apex/Apex-logo-500x250.webp",
        logoPromos: "/images/firms/Apex/Apex-logo-white.webp",
        link: "https://apextraderfunding.com/",
        hasReview: false

    },
    SFT: {
        name: "Skilled Funded Traders",
        logoText: "/images/firms/SFT/SFT-logo-500x250.webp",
        logoPromos: "/images/firms/SFT/SFT-logo-white.webp",
        link: "https://skilledfundedtraders.com/",
        hasReview: false
    },
    TFF: {
        name: "True Forex Funds",
        logoText: "/images/firms/TFF/TFF-logo-500x250.webp",
        logoPromos: "/images/firms/TFF/TFF-logo-white.webp",
        link: "https://trueforexfunds.com/",
        hasReview: false
    },
    FundingPips: {
        name: "Funding Pips",
        logoText: "/images/firms/FundingPips/FundingPips-logo-500x250.webp",
        logoPromos: "/images/firms/FundingPips/FundingPips-logo-white.webp",
        link: "https://fundingpips.com/",
        hasReview: false
    },
    FundingTraders: {
        name: "Funding Traders",
        logoText: "/images/firms/FundingTraders/FundingTraders-logo-500x250.webp",
        logoPromos: "/images/firms/FundingTraders/FundingTraders-logo-white.webp",
        link: "https://fundingpips.com/",
        hasReview: false
    },
    DarwinexZero: {
        name: "Darwinex Zero",
        logoText: "/images/firms/DarwinexZero/DarwinexZero-logo-500x250.webp",
        logoPromos: "/images/firms/DarwinexZero/DarwinexZero-logo-white.webp",
        link: "https://fundingtraders.com/",
        hasReview: false
    },
    E8: {
        name: "E8 Markets",
        logoText: "/images/firms/E8/E8-logo-500x250.webp",
        logoPromos: "/images/firms/E8/E8-logo-white.webp",
        link: "https://e8markets.com/",
        hasReview: false
    },
    Audacity: {
        name: "Audacity",
        logoText: "/images/firms/Audacity/Audacity-logo-500x250.webp",
        logoPromos: "/images/firms/Audacity/Audacity-logo-white.webp",
        link: "https://e8markets.com/",
        hasReview: false
    }
}