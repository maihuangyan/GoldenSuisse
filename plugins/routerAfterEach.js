export default ({ app, store }) => {
  // Each route
  app.router.afterEach((to, from) => {
    setTimeout(() => {
      /*let productList = [
        "/products/nonbank",
        "/products/swiss_privacy",
        "/products/risk_and_return",
        "/products/bank_risk",
        "/products/tax_benefits",
        "/products/user_friendly",
        "/products/instant_liquidity",
        "/products/payouts",
        "/products/transfers",
        "/products/exchange"
      ];
      let whiteCard = [
        "/products/card/countries",
        "/products/card/private_transactions",
        "/products/card/point_of_sales",
        "/products/card/card_limits",
        "/products/card/no_hidden_card_fees",
        "/products/card/zero_liability_policy",
        "/products/card/residence_requirements",
        "/products/card/gold_card"
      ];
      let whiteTechnology = [
        "/products/technology/registration",
        "/products/technology/instant_transfers",
        "/products/technology/instant_buy_orders",
        "/products/technology/instant_sell_orders",
        "/products/technology/card_loads",
        "/products/technology/holdings_and_transactions",
        "/products/technology/fiat_currency"
      ];
      let whiteClub = [
        "/products/club/exclusive_clubs",
        "/products/club/concierge",
        "/products/club/hotel_bookings",
        "/products/club/airport_lounges"
      ];
      let whiteVaultTrust = [
        "/products/vault_trust/private_swiss_bullion_vault",
        "/products/vault_trust/picking_up_your_gold_in_zurich",
        "/products/vault_trust/insurance",
        "/products/vault_trust/delivery_worldwide"
      ];
      let whiteGoldSilver = [
        "/products/gold_silver/one_oz_silver",
        "/products/gold_silver/one_oz_gold",
        "/products/gold_silver/invest",
        "/products/gold_silver/types_of_investment",
        "/products/gold_silver/investment_vs_collector",
        "/products/gold_silver/coins_vs_bars",
        "/products/gold_silver/history_of_gold",
        "/products/gold_silver/legal_tender",
        "/products/gold_silver/hard_versus_soft"
      ];
      let whiteEthicalGold = [
        "/golden_suisse/sustainability/children",
        "/golden_suisse/sustainability/challenge",
        "/golden_suisse/sustainability/mission",
        "/golden_suisse/sustainability/approach",
        "/golden_suisse/sustainability/how_we_help"
      ];

      let all = [
        ...productList,
        ...whiteCard,
        ...whiteClub,
        ...whiteEthicalGold,
        ...whiteGoldSilver,
        ...whiteTechnology,
        ...whiteVaultTrust
      ];*/

      let this$el = document.querySelector(".page");
      if (Scrollbar.get(this$el)) {
        Scrollbar.get(this$el).scrollTop = 0;
      }
    }, 500);
  });
};
