export const state = () => ({
  list: {
    card: [
      {
        path: 'countries',
        title: "120+ Countries",
        exist: true
      },
      {
        path: "point-of-sales",
        title: "40 Million Point of sales",
        exist: true
      },
      {
        path: "private-transactions",
        title: "Private Transactions",
        exist: true
      },
      {
        path: "card-limits",
        title: "Card Limits",
        exist: true
      },
      {
        path: "no-hidden-card-fees",
        title: "No Hidden Card Fees",
        exist: true
      },
      {
        path: "residence-requirements",
        title: "Residence Requirements",
        exist: true
      },
      {
        path: "zero-liability-policy",
        title: "Zero Liability Policy",
        exist: true
      },
      {
        path: "gold-card",
        title: "Gold Card",
        img1: "image/goldCircle.png",
        img2: "image/whiteCircle.png",
        exist: true
      },
      {
        path: "club",
        title: "The Club",
        exist: true
      },
    ],
    'gold-silver': [
      {
        path: `one-oz-silver`,
        title: "1 Oz Silver Eagle",
        exist: true,
      },
      {
        path: `one-oz-gold`,
        title: "1 Oz Gold Eagle",
        exist: true,
      },
      {
        path: `invest`,
        title: "Invest In Metals",
        exist: true,
      },
      {
        path: `types-of-investment`,
        title: "Types of Investment",
        exist: true,
      },
      {
        path: `investment-vs-collector`,
        title: "Investment vs Collector",
        exist: true,
      },
      {
        path: `coins-vs-bars`,
        title: "Coins vs Bars",
        exist: true,
      },
      {
        path: `history-of-gold`,
        title: "History of Gold",
        exist: true,
      },
      {
        path: `legal-tender`,
        title: "Legal Tender",
        exist: true,
      },
      {
        path: `hard-versus-soft`,
        title: "Hard vs Soft Currency",
        exist: true,
      },
    ],
    'vault-trust': [
      {
        path: "vaults",
        title: "The Vaults",
        exist: true,
      },
      {
        path: "bullion-access",
        title: "Bullion Access",
        exist: true,
      },
      {
        path: "audits",
        title: "Audits",
        exist: true,
      },
      {
        path: "insurance",
        title: "Insurance",
        exist: true,
      },
      {
        path: "external-bullion-deposits",
        title: "External Bullion Deposits",
        exist: true,
      },
    ],
    technology: [
      {
        path: "registration",
        title: "Registration",
        exist: true
      },
      {
        path: "instant-transfers",
        title: "Instant Transfers",
        exist: true
      },
      {
        path: "instant-buy-orders",
        title: "Instant Buy Orders",
        exist: true
      },
      {
        path: "instant-sell-orders",
        title: "Instant Sell Orders",
        exist: true
      },
      {
        path: "card-loads",
        title: "Card Loads",
        exist: true
      },
      {
        path: "holdings-and-transactions",
        title: "Holdings And Transactions",
        exist: true
      },
      {
        path: "fiat-currency",
        title: "Fiat Currency",
        exist: true
      }
    ],
    sustainability: [
      {
        path: "children",
        title: "Children",
        exist: true,
      },
      {
        path: "challenge",
        title: "Challenge",
        exist: true,
      },
      {
        path: "mission",
        title: "Mission",
        exist: true,
      },
      {
        path: "approach",
        title: "Approach",
        exist: true,
      },
    ],
    'open-banking': [
      {
        path: 'borderless-accounts',
        title: 'Borderless Accounts',
        exist: true
      },
      {
        path: 'currencies',
        title: '50 Currencies',
        exist: true
      },
      {
        path: 'heritage',
        title: 'Heritage',
        exist: true
      },
      {
        path: 'exchange-rates',
        title: 'Exchange Rates',
        exist: true
      },
      {
        path: 'countries',
        title: '60 Countries',
        exist: true
      },
      {
        path: 'trusted-worldwide',
        title: 'Trusted Worldwide',
        exist: true
      },
      {
        path: 'instant-payments',
        title: 'Instant Payments',
        exist: true
      },
    ],
    'egold-bar': [
      {
        title: 'Ethical Gold',
        path: 'ethical-gold',
        exist: true
      },
      {
        title: 'Instant Exchange',
        path: 'instant-exchange',
        exist: true
      },
      {
        title: 'Instant Transfer',
        path: 'instant-transfer',
        exist: true
      },
      {
        title: 'Lbma Refiner',
        path: 'lbma-refiner',
        exist: true
      },
      {
        title: 'Secure Storage',
        path: 'secure-storage',
        exist: true
      },
      {
        title: 'Swiss Assay',
        path: 'swiss-assay',
        exist: true
      }
    ],
    'benefits': [
      { title: 'Currency Risk', path: 'currency-risk', exist: true },
      { title: 'Geopolitical Risk', path: 'geopolitical-risk', exist: true },
      { title: 'Deposit Risk', path: 'deposit-risk', exist: true },
      { title: 'Data Privacy', path: 'data-privacy', exist: true },
      { title: 'Financial Risk', path: 'financial-risk', exist: true },
      { title: 'Data Security', path: 'data-security', exist: true },
      { title: "Risk and Return ", path: "risk-and-return", exist: true},
      { title: "Tax Benefits", path: "tax-benefits", exist: true},
],
    'payments': [
      { title: 'Bullion Vault Holdings', path: 'bullion-vault-holdings', exist: true },
      { title: 'Private Card', path: 'private-card', exist: true },
      { title: 'Bullion Transfers', path: 'bullion-transfers', exist: true },
      { title: 'Open Banking', path: 'open-banking', exist: true },
    ],
    'become-partner': [
      { title: 'Private Banks', path: 'private-banks', exist: true },
      { title: 'Bullion Dealers', path: 'bullion-dealers', exist: true },
      { title: 'Wealth Managers', path: 'wealth-managers', exist: true },
      { title: 'Refineries', path: 'refineries', exist: true },
    ]
  }
});

export const getters = {
  getPagesArray: state => payload => {
    if (state.list.hasOwnProperty(payload)) return state.list[payload].filter(page => page.exist);
  },
  getPagesArrayByPaths: state => payload => {
    if (state.list.hasOwnProperty(payload.categ)) return state.list[payload.categ].filter(page => {
      let result = payload.list.find(targetPath => targetPath == page.path);
      if (result) return true;
    });
  }
};
