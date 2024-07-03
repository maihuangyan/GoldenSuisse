export const state = () => ({
  categs: {
    account: [
      {
        path: "/account",
        title: "Login",
        exist: true,
      },
      {
        title: "Become a Client",
        path: "/account/register",
        exist: true,
      },
      {
        path: "/account/download",
        title: "Download Apps",
        exist: true,
      },
      {
        path: "/account/authorize",
        exist: true,
      },
    ],
    insights: [
      {
        path: "/insights",
        title: "News"
      },
      {
        path: "/videos-media",
        title: "Videos & Media"
      },
    ],
    contact: [
      {
        path: "/contact",
        title: "Headquarters",
        exist: true,
      },
      {
        path: "/contact/support",
        title: "Support",
        exist: true,
      },
    ],
    'vqf-membership': [
      {
        path: "/vqf-membership",
        title: "VQF Membership",
        exist: true,
      },
      {
        path: "goldensuisse_terms.pdf",
        title: "Terms",
        pdf: true,
        exist: true,
      },
      {
        path: "goldensuisse_aml.pdf",
        title: "AML",
        pdf: true,
        exist: true,
      },
      {
        path: "/vqf-membership/privacy",
        title: "Privacy",
        exist: true,
      },
      {
        path: "goldensuisse_privacypolicy.pdf",
        title: "Privacy Policy",
        pdf: true,
        exist: true,
      },
      {
        path: "/",
        title: "FAQ’s"
      },
      {
        path: "/vqf-membership/information",
        title: "Information",
        exist: true,
      },
    ],
    'open-banking': [
      { title: "Open Banking", path: "/open-banking", exist: true, notMenu: true},
    ],
    technology: [
      { title: "Technology", path: "/technology", exist: true, notMenu: true},
    ],
    'payments': [
      { title: "Gold & Silver", path: "/payments/gold-silver", exist: true },
      { title: 'Payments', path: '/payments', exist: true },
      { title: "Vault", path: "/payments/vault-trust", exist: true },
      { title: "Card", path: "/payments/card", exist: true },
      { title: "Advisory", path: "/payments/advisory", exist: true},
      { title: "Benefits", path: "/payments/benefits", exist: true },
      { title: "The Club", path: "/payments/card/club", exist: true, notMenu: true}
    ],
    company: [
      { title: "Company", path: "/company", exist: true },
      { title: "Governance", path: "/company/governance", exist: true },
      { title: "Sustainability", path: "/company/sustainability", exist: true },
      { title: "Become a Partner", path: "/company/become-partner", exist: true },
      { title: "Rates", path: "/company/rates", exist: true },
      { title: "Awards", path: "/company/awards", exist: true },
    ],
    'egold-bar': [
      { title: 'E-GoldBar', path: '/egold-bar', exist: true }
    ],
  }
});

export const getters = {
  getPage: state => payload => {
    let result;
    for (let categ in state.categs) {
      result = state.categs[categ].find(page => page.path == payload);
      if (result) return result;
    }
  },
  getOnlyMenusPages: state => payload => {
    let copeCategsObj = JSON.parse(JSON.stringify(state.categs));
    for (let categ in copeCategsObj) {
      copeCategsObj[categ].forEach(function (page, index) {
        if (page.notMenu) copeCategsObj[categ].splice(index, 1);
      });
    }
    return copeCategsObj;
  }
};
