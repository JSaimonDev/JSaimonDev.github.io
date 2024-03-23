export type Info = { [key: string]: Section }
export type Section = { [key: string]: string}

export const info: {[key: string]: Info} = {
    FTMO: {
        bussinessInfo: {
            hq: "Praga 1, Calle Purkynova 2121/3, 110 00, República Checa",
            foundation: "2015",
            ceo: "Otakar Suffner",
            trustPilotScore: "4.8",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Broker propio",
            currency: "USD, GBP, EUR, CZK, CAD, AUD, CHF",
            fee: "Divisas: 3$/lote\<br> Acciones: 0,004%\<br> Metales: 0,001%\<br> Índices y crypto: 0",
            leverage: "1:100",
            instruments: "Divisas, índices, metales y acciones",
            platforms: "Metatrader 4, Metatrader 5, cTrader y DXTrade",
        },
        plansAndConditions: {
            phases: "2",
            maxAllocation: "400.000 $",
            maxSplit: "80% escalable hasta 90%",
            depositOptions: "Transferencia, tarjeta, crypto y Skrill",
            withdrawalOptions: "Transferencia, crypto y Skrill",
            scaling: "Hasta 2 millones de dólares y 90% de beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "155€ - 1080€",
        },
        rules: {

            minDays: "4 días",
            maxDays: "Sin límite",
            news: "Permitido sólo durante la prueba",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            tradeCopier: "Permitido",
            weekend: "Permitido en cuenta swing",
        },
        social: {
            facebookLink: "https://facebook.com/ftmocom/",
            xLink: "https://x.com/FTMO_com",
            instagramLink: "https://instagram.com/ftmocom/",
            youtubeLink: "https://www.youtube.com/channel/UCypUrEOeDRA5_uLMnKBVpZg?sub_confirmation=1",
            tiktokLink: "https://www.tiktok.com/@ftmocom",
            discordLink: "https://discord.com/invite/8j7r5XaaW6",
            linkedinLink: "https://www.linkedin.com/company/ftmo/"
        }
    },
    TFT: {
        bussinessInfo: {
            hq: "14001 W HWY 29, Suite 102, Liberty Hill, TX 78642, Estados Unidos",
            foundation: "2021",
            ceo: "Angelo Ciaramello",
            trustPilotScore: "4.1",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;"
        },
        techInfo: {
            brokers: "ThinkMarkets, Eightcap, Purple Trading y Voyage Markets",
            currency: "USD",
            fee: "3$/lote",
            leverage: "Divisas ➤ 1:10 \<br> Metales ➤ 1:40 \<br> Crypto ➤ 1:2 <br> Índices ➤ 1:20",
            instruments: "Divisas, índices, metales y crypto",
            platforms: "Metatrader 4, Metatrader 5, cTrader y DXTrade"
        },
        plansAndConditions: {
            phases: "1, 2 y 3",
            maxAllocation: "400.000 $",
            maxSplit: "80% escalable hasta 90%",
            depositOptions: "Tarjeta y crypto",
            withdrawalOptions: "Transferencia, Paypal, Payoneer, Revolut y crypto",
            scaling: "Hasta 1.5 millones de dólares y 90% de beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "49$ - 1869$",
        },
        rules: {
            minDays: "Dragon, rapid y knight challenge: 0 días \<br> Standard: 3 días \<br> Royal: 5 días",
            maxDays: "Sin límite",
            news: "Permitido en todas las pruebas. Restringido en la cuentas Regular",
            ea: "Permitido en las cuentas Dragon, Royal, Knight. En Standard solo con add-on",
            stopLoss: "No es obligatorio",
            tradeCopier: "<b>Externamente:</b> Permitido solo como master.\<br><b>Internamente</b> Permitido en las cuentas Dragon, Royal, Knight y Standard(con add-on)",
            weekend: "Permitido excepto en las versión Regular de las cuentas Standard, Rapid y Dragon",
        },
            social: {
            facebookLink: "https://www.facebook.com/thefundedtrader",
            xLink: "https://www.twitter.com/thefundedtrader",
            instagramLink: "https://www.instagram.com/thefundedtrader/?hl=en",
            youtubeLink: "https://www.youtube.com/@TheFundedTrader",
            tiktokLink: "https://www.tiktok.com/@thefundingkingdom",
            discordLink: "https://discord.com/invite/thefundedtrader",
                linkedinLink: "https://www.linkedin.com/company/thefundedtrader/",
                telegramLink: "https://t.me/thefundedtraderprogram/",
            redditLink: "https://www.reddit.com/r/TheFundedTrader/?rdt=48048"
        }
    },
    FundedNext: {
                bussinessInfo: {
            hq: "Office No. 7, AI Robotics HUB, C1 Building, AFZ, Ajman, Emiratos Árabes",
            foundation: "2022",
            ceo: "Abdullah Jayed",
            trustPilotScore: "4.6",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "GrowthNext",
            currency: "USD",
            fee: "Divisas: 3$/lote\<br> Materias primas: 0,004%\<br> Índices y crypto: 0",
            leverage: "<i>Varía en función del tipo de cuenta</i>Divisas ➤ 1:30 - 1:100 \<br> Materias primas ➤ 1:10 - 1:50 \<br> Crypto ➤ 1:2 <br> Índices ➤ 1:5 - 1:50",
            instruments: "Divisas, índices, materias primas y crypto",
            platforms: "Metatrader 4 y Metatrader 5"
        },
        plansAndConditions: {
            phases: "1 y 2",
            maxAllocation: "400.000 $",
            maxSplit: "Hasta 90%, y 95% con uso de add-on",
            depositOptions: "Transferencia bancaria y crypto",
            withdrawalOptions: "Transferencia, Wise, Perfect Money, Riseworks y crypto",
            scaling: "Hasta 4 millones de dólares",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "49$ - 1099$",
        },
        rules: {
            minDays: "Stellar 1-step: 2 días\<br>Stellar 2-step y Evaluation: 5 días\<br>Express: 10 días",
            maxDays: "Stellar y Express: Sin límite\<br>Evaluation(fase 1): 4 semanas\<br>Evaluation(fase 2): 8 semanas",
            news: "Permitido excepto en la cuenta Express",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            tradeCopier: "Permitido",
            weekend: "Permitido excepto en la cuenta Express Consistency"
        },
        social: {
            facebookLink: "https://www.facebook.com/fundednext",
            xLink: "https://www.twitter.com/FundedNext?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            youtubeLink: "https://www.youtube.com/c/FundedNext",
            tiktokLink: "https://www.tiktok.com/@fundednext",
            instagramLink: "https://www.instagram.com/fundednext?igshid=MzRlODBiNWFlZA==",
            discordLink: "https://discord.com/invite/PJF2mKXEM7"
        }
    },
    GFT: {
        bussinessInfo: {
            hq: "Calle Perez Galdos 32, 35002, Las Palmas, Spain",
            foundation: "2023",
            ceo: "Edoardo Dalla Torre",
            trustPilotScore: "4.3",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Match Trader",
            currency: "USD",
            fee: "Divisas y materias primas: 5$/lote\<br> Índices y crypto: 0\<br>",
            leverage: "Divisas ➤ 1:100 \<br> Metales ➤ 1:80 \<br>Materias primas e Índices ➤ 1:20 \<br> Crypto ➤ 1:2",
            instruments: "Divisas, índices, metales, materias primas y crypto",
            platforms: "Match Trader",
        },
        plansAndConditions: {
            phases: "1 y 2",
            maxAllocation: "800.000 $",
            maxSplit: "95%",
            depositOptions: "Tarjeta y crypto",
            withdrawalOptions: "Transferencia, Riseworks y crypto",
            scaling: "Hasta 2 millones de dólares, 95% de beneficio, y 500$ de salario mensual",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "45$ - 1200$",
        },
        rules: {
            minDays: "0",
            maxDays: "Goat y No Time Limit: Sin límite\<br>Classic: 30 días fase 1 y 60 días fase 2",
            news: "Permitido con restricciones. Es posible tener posiciones abiertas pero no operar lo momentos de máxima volatilidad en noticias de alto impacto.",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            tradeCopier: "No permitido",
            weekend: "Permitido"
        },
        social: {
            xLink: "https://twitter.com/goatfunded",
            youtubeLink: "https://www.youtube.com/channel/UCoj64UspT11XGbawupxXqyQ",
            instagramLink: "https://www.instagram.com/goatfundedtrader/",
            discordLink: "https://discord.com/invite/5gvaZPRQAa"
        }
    },
    BlueGuardian: {
        bussinessInfo: {
            hq: "Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates",
            foundation: "2021",
            ceo: "Sean Bainton",
            trustPilotScore: "4.6",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Guardian Markets",
            currency: "USD",
            fee: "Divisas y Materias primas: 5$/lote(CTrader) y 7$/lote(DXTrade)\<br>Índices y Crypto: 0",
            leverage: "Divisas ➤ 1:50 - 1:100\<br>Materias primas e Índices ➤ 1:20 \<br> Crypto ➤ 1:2",
            instruments: "Divisas, índices, materias primas y crypto",
            platforms: "DXTrade, CTrader y Match Trader"
        },
        plansAndConditions: {
            phases: "1 y 2",
            maxAllocation: "400.000 $",
            maxSplit: "85%",
            depositOptions: "Tarjeta y Crypto(Coinbase)",
            withdrawalOptions: "Transferencia y Crypto",
            scaling: "Hasta 2 millones",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "87$ - 999$",
        },
        rules: {
            minDays: "0",
            maxDays: "Sin límite",
            news: "Permitido",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "Permitido",
            hedging: "Permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            linkedinLink: "https://www.linkedin.com/company/blueguardiancom/",
            xLink: "https://twitter.com/BlueGuardiancom",
            instagramLink: "https://www.instagram.com/blueguardiancom/",
            youtubeLink: "https://www.youtube.com/channel/UCmqrKtuW0zGRDteM6knZYPg",
            discordLink: "https://discord.gg/blueguardian",
            telegramLink: "https://t.me/BlueGuardianCapital"
        }
    },
    The5ers: {
        bussinessInfo: {
            hq: "14 Haroshet st, Raanaa, Israel",
            foundation: "2016",
            ceo: "Gil Ben-Hur",
            trustPilotScore: "4.8",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Propio",
            currency: "USD",
            fee: "4$/lote",
            leverage: "Divisas ➤ 1:10\<br>Materias primas y Metales ➤ 1:3.3 \<br>Índices ➤ 1:2.5\<br> Crypto ➤ 1:0.2",
            instruments: "Divisas, índices, metales, materias primas y crypto",
            platforms: "Metatrader 5"
        },
        plansAndConditions: {
            phases: "1, 2 y 3",
            maxAllocation: "250.000$",
            maxSplit: "Hasta 100% scaling",
            depositOptions: "Tarjeta, transferencia y crypto",
            withdrawalOptions: "Wise, transferencia y crypto",
            scaling: "Hasta 4 millones y 100% de beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "39$ - 850$"
        },
        rules: {
            minDays: "Cuenta Hyper Growth: 0\<br> Cuenta High Stakes: 3 días con beneficio",
            maxDays: "Sin límite",
            news: "Permitido mantener posiciones. No permitide abrir o cerrar 2 minutos antes y después",
            ea: "Permitido",
            stopLoss: "Obligatorio solo en la cuenta Bootcamp",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            xLink: "https://twitter.com/the5erstrading",
            instagramLink: "https://www.instagram.com/the.5ers",
            facebookLink: "https://www.facebook.com/the5ersproptrading/",
            youtubeLink: "https://www.youtube.com/channel/UCyvjJo0YumXPtxc_FlKWcBQ",
            linkedinLink: "https://www.linkedin.com/company/the5-ers---trading-group/"
        }
    },
    TTP: {
        bussinessInfo: {
            hq: "Landstrasse 63, 9490, Vaduz, Liechtenstein",
            foundation: "2022",
            ceo: "Thomas Heyden y Daniela Egli",
            trustPilotScore: "4.4",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "FXFlat, GBE Brokers",
            currency: "USD",
            leverage: "Divisas ➤ 1:10 - 1:20\<br>Materias primas e Índices ➤ 1:10 \<br> Crypto y acciones ➤ 1:2",
            instruments: "Divisas, índices, oro, materias primas, crypto y futuros",
            platforms: "CFD: Metatrader5 y Metatrader 4\<br>Futuros: ATAS / Quantower, R/Trader y Bookmap"
        },
        plansAndConditions: {
            phases: "1",
            maxAllocation: "5 millones de $",
            maxSplit: "80%",
            depositOptions: "Apple Pay, Google Pay, Perfect Money, Neteller, Skrill, tarjeta, transferencia y crypto",
            withdrawalOptions: "Transferencia y Crypto",
            scaling: "Desafíos de 10 niveles. Cada nivel aumenta el tamaño de la cuenta (hasta 5 millones) y el beneficio (hasta 80%)",
            accountType: "Desafío poner niveles con pago al finalizar cada nivel",
            paymentType: "Único",
            priceRange: "99$ - 999$"
        },
        rules: {
            minDays: "5",
            maxDays: "Sin límite",
            news: "Restringido operar 2 minutos antes o después de noticias de alto impacto",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "Permitido",
            hedging: "Permitido en una misma cuenta para gestionar el riesgo",
            tradeCopier: "Permitido",
            weekend: "Permitido en CFDs, no en futuros"
        },
        social: {
            facebookLink: "https://www.facebook.com/TheTradingPitGroup",
            instagramLink: "https://www.instagram.com/thetradingpitofficial/",
            xLink: "https://twitter.com/TheTradingPit_",
            linkedinLink: "https://www.linkedin.com/company/thetradingpitofficial/",
            youtubeLink: "https://www.youtube.com/@TheTradingPitOfficial/",
            redditLink: "https://www.reddit.com/user/The_Trading_Pit",
            tiktokLink: "https://www.tiktok.com/@thetradingpitofficial",
            discordLink: "https://discord.gg/TdY8adgfdA",
            telegram: "https://t.me/TheTradingPitOfficial_Telegram"
        }
    },
    Topstep: {
        bussinessInfo: {
            hq: "Chicago Board of Trade Building, 141 W Jackson Blvd, #4240, Chicago, IL 60604",
            foundation: "2012",
            ceo: "Michael Patak",
            trustPilotScore: "4.6",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "NinjaTrader, Plus500, Dorman, CQG y Cunningham",
            currency: "USD",
            fee: "<a href='https://intercom.help/topstep-llc/en/articles/8284213-what-are-the-commissions-and-fees-in-the-trading-combine' style='color: #4cccd3;'>Trading Combine (link)</a><a href='https://intercom.help/topstep-llc/en/articles/8284231-what-are-the-commissions-and-fees-in-the-live-funded-account' style='color: #4cccd3;'>Live Funded Account (link)</a>",
            leverage: "No ofrece apalancamiento",
            instruments: "Futuros: Índices, divisas, materias primas, bonos, tipos de interés y bitcoin",
            platforms: "NinjaTrader, Quantower, Tradovate, Tradingview y demás populares lataformas de futuros"
        },
        plansAndConditions: {
            phases: "1",
            maxAllocation: "150.000$",
            maxSplit: "100% par alos primeros 10.000$ y 90% para el resto",
            depositOptions: "Tarjeta y paypal",
            withdrawalOptions: "Transferencia y Wise",
            scaling: "No es como las demás firmas. En Topstep el scaling plan limita la cantidad de contratos que puedes arriesgar dependiendo de tu cuenta",
            accountType: "Prueba de fondeo",
            paymentType: "Suscripción durante la prueba, inscripción para la cuenta simulada y suscripción para la cuenta real",
            priceRange: "Suscripción: 49$-149$"
        },
        rules: {
            minDays: "No hay mínimo de días, pero el día mayor ganancia no puede ser más de 50% del profit target. Si es así el profit target sube",
            maxDays: "Sin límite",
            news: "Permitido",
            stopLoss: "No es obligatorio",
            tradeCopier: "Permitido",
            weekend: "No permitido"
        },
        social: {
            facebookLink: "https://www.facebook.com/TopstepOfficial",
            youtubeLink: "https://www.youtube.com/c/TopstepOfficial",
            instagramLink: "https://www.instagram.com/topstep/",
            xLink: "https://twitter.com/Topstep",
            linkedinLink: "https://www.linkedin.com/company/topstep",
            discordLink: "https://discord.gg/topstep"
        }
    },
    Apex: {
        bussinessInfo: {
            hq: "Apex Trader Funding Inc., 2028 E. Ben White Blvd Ste 240 -9873, Austin, TX 78741",
            foundation: "2021",
            ceo: "Darrell Martin",
            trustPilotScore: "4.8",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Rithmic y Tradovate",
            currency: "USD",
            fee: "<a href='https://support.atf.com/hc/en-us/articles/4404825514139-Commissions-for-Rithmic' style='color: #4cccd3;'>Rhithmic (link)</a><a href='https://support.atf.com/hc/en-us/articles/13391308020891-Commissions-for-Tradovate' style='color: #4cccd3;'>Tradovate (link)</a>",
            leverage: "No ofrece apalancamiento",
            instruments: "Futuros: Índices, divisas, materias primas, bonos, tipos de interés y bitcoin",
            platforms: "Ninjatrader, Tradingview, Quantower, RTrader y otras populares plataformas de futuros"
        },
        plansAndConditions: {
            phases: '1',
            maxAllocation: '100.000',
            maxSplit: "100% par alos primeros 25.000$ y 90% para el resto",
            depositOptions: "Tarjeta",
            withdrawalOptions: "Transferencia",
            scaling: "No",
            accountType: "Prueba de fondeo",
            paymentType: "Suscripción",
            priceRange: "Suscripción: 147$-677$"
        },
        rules: {
            minDays: "7",
            maxDays: "Sin límite",
            news: "Permitido",
            stopLoss: "No es obligatorio",
            tradeCopier: "Permitido",
            weekend: "No permitido"
        },
        social: {
            facebookLink: "https://www.facebook.com/groups/apextraderfunding",
            instagramLink: "https://www.instagram.com/apextraderfunding/",
            youtubeLink: "https://www.youtube.com/c/ApexTraderFunding/videos"
        }
    },
    SFT: {
        bussinessInfo: {
            hq: "Estados Unidos",
            foundation: "2023",
            ceo: "Omar Agag, Palden Bhutia, y Riz Iqbal",
            trustPilotScore: "4.4",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733;"
        },
        techInfo: {
            brokers: "Purple Trading y Voyage Markets",
            currency: "USD",
            fee: "Divisas: 7$/lote\<br>Metales: 3$/lote\<br>Índices, crudo y crypto: 0",
            leverage: "Divisas ➤ 1:30 - 1:100\<br>Materias primas ➤ 1:10 - 1:30 \<br> Índices ➤ 1:5 - 1:20 Crypto ➤ 1:1 - 1:2",
            instruments: "Divisas, índices, metales, materias primas y crypto",
            platforms: "DXTrade, CTrader"
        },
        plansAndConditions: {
            phases: "2",
            maxAllocation: "400.000 $",
            masSplit: "85%",
            depositOptions: "Google Pay, Apple Pay, tarjeta y crypto",
            withdrawalOptions: "Crypto",
            scaling: "Hasta 2 millones de dólares y 90% beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "33$ - 1539$",
        },
        rules: {
            minDays: "Standard y Expert: 0 días\<br>Skilled: 5 días",
            maxDays: "Sin límite",
            news: "Solo permitido durante la prueba",
            ea: "Standard y Skilled: Permitido\<br>Expert: No permitido",
            stopLoss: "No es obligatorio",
            martingale: "No permitido",
            grid: "No permitido",
            hedging: "No permitido",
            tradeCopier: "Permitidio",
            weekend: "Permitido solo en cuentas swing"
        },
        social: {
            tiktokLink: "https://www.tiktok.com/@skilledfundedtraders",
            facebookLink: "https://www.facebook.com/skilledfundedtraders/",
            discordLink: "https://discord.gg/3U5XggnY6a",
            youtubeLink: "https://www.youtube.com/@skilledfundedtraders",
            instagram: "https://www.instagram.com/skilledfundedtraders/",
            xLink: "https://twitter.com/SFTFirm"
        }
    },
    TFF: {
        bussinessInfo: {
            hq: "Móricz Zsigmond rkp. 1/B. fszt. 14, 9022, Győr, Hungary",
            foundation: "2021",
            ceo: "Richard Nagy",
            trustPilotScore: "4.3",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733;"
        },
        techInfo: {
            brokers: "Broker propio",
            currency: "USD, EUR y GBP",
            fee: "Divisas y metales: 3,5$/lote\<br>Crypto: 0,045%/lote\<br>Índices: 0.0005%",
            leverage: "Divisas y materias primas ➤ 1:100\<br>Índices ➤ 1:50\<br> Acciones ➤ 1:10\<br> Crypto ➤ 1:5",
            instruments: "Divisas, índices, acciones, materias primas y crypto",
            platforms: "CTrader"
        },
        plansAndConditions: {
            phases: "1 y 2",
            maxAllocation: "400.000 $",
            masSplit: "80%",
            depositOptions: "Tarjeta y crypto",
            withdrawalOptions: "ADVCash, Rise and crypto",
            scaling: "Hasta 2.5 millones de dólares y 90% beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "49€ - 998€",
        },
        rules: {
            minDays: "1 Fase: 5 días\<br>2 Fases: 0 días",
            maxDays: "1 Fase: 30 días\<br>2 Fases: Sin límite",
            news: "Permitido",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "Permitido",
            hedging: "Permitido",
            grid: "No permitido",
            tradeCopier: "Permitidio",
            weekend: "Permitido"
        },
        social: {
            facebookLink: "https://www.facebook.com/trueforexfunds",
            discordLink: "https://discord.gg/5fbuf6qNsE",
            youtubeLink: "https://www.youtube.com/channel/UCy7PJ2gJznmEFP9DPZJ44Hg",
            instagram: "https://www.instagram.com/trueforexfunds",
            xLink: "https://twitter.com/trueforexfunds"
        }
    },
    FundingPips: {
        bussinessInfo: {
            hq: "Premises NO. 19948-001, IFZA Business Park, DDP Dubai U.A.E",
            foundation: "2022",
            ceo: "Khaled Ayesh",
            trustPilotScore: "4.5",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Broker propio",
            currency: "USD",
            fee: "Divisas y metales: 2$/lote\<br>Índices, crudo y crypto: Sin comisión",
            leverage: "Divisas ➤ 1:100\<br>Metales ➤ 1:30\<br>Índices ➤ 1:20\<br>Crudo ➤ 1:10 \<br> Crypto ➤ 1:2",
            instruments: "Divisas, índices, metales, crudo y crypto",
            platforms: "CTrader y Match Trader"
        },
        plansAndConditions: {
            phases: "2",
            maxAllocation: "200.000 $",
            maxSplit: "80%",
            depositOptions: "Skrill, Crypto y Paypal",
            withdrawalOptions: "Transferencia y Crypto",
            scaling: "Hasta 2 millones de dólares y 90% de beneficio",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "32$ - 100$",
        },
        rules: {
            minDays: "0",
            maxDays: "Sin límite",
            news: "Restringido solo 2 minutos antes y despues de noticia de alto impacto. La operación no se ejecutara y no habrá violación de ninguna regla",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            hedging: "No permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            facebookLink: "https://www.facebook.com/fundingpipscom",
            xLink: "https://twitter.com/fundingpips",
            instagramLink: "https://www.instagram.com/fundingpips/",
            youtubeLink: "https://www.youtube.com/channel/UC1ROfUOAjKQJIeGgJHDk_pA",
            discordLink: "https://discord.com/invite/fundingpips",
        }
    },
    FundingTraders: {
        bussinessInfo: {
            hq: "IFZA Business Park, DDP, 26656 - 001, A1 - 3641379065 Dubai UAE",
            foundation: "2023",
            ceo: "Desconocido",
            trustPilotScore: "4.6",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Blueberry Markets y CBT Limited",
            currency: "USD",
            fee: "Challenge: Sin comisión\<br>Cuenta fondeada: 3$/lote",
            leverage: "Divisas ➤ 1:100\<br>Materias primas e Índices ➤ 1:50 \<br> Crypto ➤ 1:5",
            instruments: "Divisas, índices, materias primas y crypto",
            platforms: "Tradelocker y Metatrader 5"
        },
        plansAndConditions: {
            phases: "1 y 2",
            maxAllocation: "750.000 $",
            maxSplit: "80% y 100% con add-on",
            depositOptions: "Tarjeta y Crypto",
            withdrawalOptions: "Transferencia(Rise) y Crypto",
            scaling: "Hasta 2 millones de dólares",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "50$ - 2500$",
        },
        rules: {
            minDays: "1",
            maxDays: "Sin límite",
            news: "Permitido",
            ea: "Permitido con límites. Consultar antes con ellos preferiblemente",
            stopLoss: "No es obligatorio",
            martingale: "No permitido",
            hedging: "No permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            xLink: "https://twitter.com/Funding_Traders",
            instagramLink: "https://instagram.com/fundingtraderscom",
            discordLink: "https://discord.gg/fundingtraders",
            telegramLink: "https://t.me/fundingtraders"
        }
    },
    DarwinexZero: {
        bussinessInfo: {
            hq: "Level 39, 1 Canada Square Canary Wharf, London, England, E14 5AB, United Kingdom",
            foundation: "2012",
            ceo: "Juan Colón",
            trustPilotScore: "4",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Propio",
            currency: "USD",
            fee: "<a href='https://www.darwinexzero.com/es/activos' style='color: #4cccd3;'>Link</a>",
            leverage: "Divisas ➤ 1:30\<br>Materias primas e Índices ➤ 1:20 \<br> Acciones y ETFs ➤ 1:5",
            instruments: "CFDs: Divisas, índices, materias primas, acciones y ETFs\<br>Futuros: Divisas, índices, materias primas y tipos de interés",
            platforms: "Metatrader 4 y Metatrader 5"
        },
        plansAndConditions: {
            phases: "No hay fases.",
            maxAllocation: "DarwinIA Silver: 375.000$\<br>DarwinIA Gold: 500.000$ + Inversores externos",
            maxSplit: "15%",
            depositOptions: "Tarjeta",
            withdrawalOptions: "Transferencia",
            scaling: "Sin límite",
            accountType: "Cada mes, el trader puede conseguir capital en base a los resultados de su estrategia. Asignación mensual con validez de 3 meses para DarwinIA Silver y de 6 meses para DarwinIA Gold",
            paymentType: "Suscripción mensual",
            priceRange: "38€",
        },
        rules: {
            news: "Permitido",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "Permitido",
            hedging: "Permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            xLink: "https://twitter.com/DarwinexZero",
            instagramLink: "https://www.instagram.com/darwinexzero/",
            youtubeLink: "https://www.youtube.com/@DarwinexZero/featured",
            discordLink: "https://discord.com/invite/A5NjGduWbp",
        }
    },
    E8: {
        bussinessInfo: {
            hq: "100 Crescent Ct, Unit 700, Dallas, Texas 75201, US",
            foundation: "2021",
            ceo: "Dylan Elchami",
            trustPilotScore: "4.8",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Virtual Markets",
            currency: "USD",
            fee: "Sin comisiones",
            leverage: "Divisas ➤ 1:50\<br>Materias primas e Índices ➤ 1:25 \<br> Crypto ➤ 1:5",
            instruments: "Divisas, índices, materias primas y crypto",
            platforms: "Match Trader"
        },
        plansAndConditions: {
            phases: "1 (próximamente),2 y 3",
            maxAllocation: "400.000 $",
            maxSplit: "80%",
            depositOptions: "Tarjeta y Crypto",
            withdrawalOptions: "Transferencia (Plane) y Crypto (Riseworks)",
            scaling: "Hasta 1 millón de dólares",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "47$ - 790$",
        },
        rules: {
            minDays: "1",
            maxDays: "Sin límite",
            news: "Permitido, pero las ganancias obtenidas en los momentos de mayor volatilidad pueden ser anuladas por no ser replicables",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "No permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            facebookLink: "https://www.facebook.com/E8Markets",
            xLink: "https://twitter.com/e8markets",
            instagramLink: "https://www.instagram.com/E8Marketscom",
            youtubeLink: "https://www.youtube.com/channel/UCHGznmL3rdnsDKDgrRyK_VQ",
            telegramLink: "https://t.me/e8fundinggroup"
        }
    },
    Audacity: {
        bussinessInfo: {
            hq: "Office 8.05 One Canada Square, London, England, E14 5AA, United Kingdom",
            foundation: "2012",
            ceo: "Karim Yousfi",
            trustPilotScore: "4.6",
            trustPilotStars: "&#9733; &#9733; &#9733; &#9733; &#9733;",
        },
        techInfo: {
            brokers: "Propio",
            currency: "USD, EUR, GBP",
            fee: "Sin comisiones",
            leverage: "1:30",
            instruments: "Divisas, índices, oro",
            platforms: "Metatrader 4 y Metatrader 5"
        },
        plansAndConditions: {
            phases: "2",
            maxAllocation: "240.000 $",
            maxSplit: "70%. 80% si ese mes tiene un beneficio mayor de 10%",
            depositOptions: "Tarjeta, Paypal, transferencia y crypto (Coinbase)",
            withdrawalOptions: "Transferencia y Crypto",
            scaling: "Escalado trimestral hasta 2 millones de dólares",
            accountType: "Prueba de fondeo",
            paymentType: "Único",
            priceRange: "129$ - 1559$",
        },
        rules: {
            minDays: "4",
            maxDays: "Sin límite",
            news: "Permitido",
            ea: "Permitido",
            stopLoss: "No es obligatorio",
            martingale: "No ermitido",
            hedging: "Permitido",
            tradeCopier: "Permitido",
            weekend: "Permitido"
        },
        social: {
            facebook: "https://www.facebook.com/audacitycapital",
            linkedinLink: "https://www.linkedin.com/company/audacity-capital",
            xLink: "https://twitter.com/Audacitycap",
            instagramLink: "https://www.instagram.com/audacity.capital/",
            youtubeLink: "https://www.youtube.com/@AudaCityCapital",
        }
    }
}
