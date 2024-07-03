<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">50 Currencies</h1>
      <div class="white-page__block text-cols offset_120">
        <p class="text-cols__col-2 text-mid" data-anim="fadeIn">What currencies can I send money to and from?</p>
      </div>

      <tableV1 class="white-page__block offset_80" :prop="currencies"/>

      <div class="white-page__block button-and-desc white-page__button-and-desc">
        <p class="text-desc text-desc_center button-and-desc__desc" data-anim="fadeInSimple">Apply for a<br>Private Swiss vault account</p>
        <div class="main-button main-button_center button-and-desc__button">
          <FlowButtonDark label="Become a Client" path="/account/register"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "white",
    components: {
      FlowButtonDark: () => import("@/components/FlowButtonDark"),
      tableV1: () => import("@/components/updated/tableV1")
    },
    head: {
      title: "Golden Suisse - 50 Currencies",
    },
    data: () => ({
      currencies: [
        {
          title: 'You can send money to and from these currencies',
          info: [
            'AED — Emirati Dirham <br>Within the UAE',
            'AUD — Australian dollar <br>Within Australia',
            'BGN — Bulgarian lev <br>Within Bulgaria',
            'BRL — Brazilian real <br>Within Brazil <br>We can only send payments to or from private individuals within Brazil. Currently we are unable to send business payments to or from BRL',
            'CAD — Canadian dollar <br>Within Canada',
            'CHF — Swiss franc <br>Within Switzerland and Liechtenstein',
            'CZK — Czech koruna <br>Within the Czech Republic',
            'DKK — Danish krone <br>Within Denmark',
            'EUR — Euro <br>We can send out euros to SEPA-compliant bank accounts within SEPA, and to bank accounts denominated in EUR with an IBAN outside of SEPA. We can also receive euros through SWIFT from outside the SEPA zone',
            'GBP — British pounds <br>We can also send out GBP to bank accounts denominated in GBP with an IBAN',
            'HKD — Hong Kong dollar <br>Within Hong Kong',
            'HRK — Croatian kuna <br>Within Croatia',
            'HUF — Hungarian forint <br>Within Hungary',
            'INR — Indian rupee <br>We send out INR via RTGS, NEFT, TPT (as appropriate) to INR-denominated accounts in India. We can only receive INR from Indian residents',
            'JPY — Japanese yen <br>Within Japan',
            'MYR — Malaysian ringgit <br>Within Malaysia',
            'NOK — Norwegian krone <br>Within Norway',
            'NZD — New Zealand dollar <br>Within New Zealand',
            'PLN — Polish złoty <br>Within Poland',
            'RON — Romanian leu <br>Within Romania',
            'TRY — Turkish lira <br>We can receive TRY locally from within Turkey and internationally through SWIFT. We can only send TRY to bank accounts located in Turkey, denominated in TRY',
            'SEK — Swedish krona <br>Within Sweden',
            'SGD — Singapore dollar <br>Within Singapore',
            'USD — US dollar <br>We can receive USD via ACH bank debit, domestic wire, and international SWIFT payment'
          ]
        },
        {
          title: 'You can only send money <br>to these currencies (via local transfer)',
          info: [
            'ARS — Argentine peso <br>Within Argentina',
            'BDT — Bangladeshi taka <br>Within Bangladesh',
            'BWP — Botswana pula <br>Within Botswana',
            'CLP — Chilean peso <br>Within Chile',
            'CNY — Chinese yuan <br>Within China, from a limited list of countries',
            'COP — Colombian peso <br>Within Colombia.  We can only send COP to Bancolombia recipients within Colombia. Currently, we are unable to send business payments to COP',
            'CRC — Costa Rica Colón <br>Within Costa Rica',
            'EGP — Egyptian pound <br>Within Egypt',
            'GEL — Georgian lari <br>Within Georgia',
            'GHS — Ghana Cedi <br>Within Ghana',
            'IDR — Indonesian rupiah <br>Within Indonesia',
            'ILS — Israeli shekels <br>Within Israel',
            'KES — Kenyan shillings <br>Within Kenya',
            'KRW — South Korean won <br>Within South Korea',
            'LKR — Sri Lankan rupee <br>Within Sri Lanka',
            'MAD — Moroccan dirham <br>Within Morocco',
            'MXN — Mexican peso <br>Within Mexico',
            'NGN — Nigerian naira <br>Within Nigeria',
            'NPR — Nepalese Rupee <br>Within Nepal',
            'PEN — Peruvian sol <br>Within Peru',
            'PHP — Philippine peso <br>Within the Philippines',
            'PKR — Pakistani rupee <br>We can send payments to private recipients within Pakistan. Currently we are unable to send business payments to PKR',
            'RUB — Russian ruble <br>Within Russia (except Sevastopol and Crimea due to EU sanctions)',
            'THB — Thai baht <br>Within Thailand',
            'UAH — Ukranian hryvna <br>Within Ukraine',
            'UYU — Uruguayan pesos <br>Within Uruguay',
            'VND — Vietnamese dong <br>Within Vietnam <br>We can send payments to private recipients within Vietnam. Currently we are unable to send business payments to VND',
            'XOF — West African CFA franc <br>Within Benin, Burkina Faso, Ivory Coast, Guinea-Bissau, Mali, Niger, Senegal, and Togo',
            'ZAR — South African Rand <br>Within South Africa. TransferWise sends out ZAR via SWIFT international payment (in South Africa only) and local transfers',
            'ZMW — Zambian kwacha <br>Within Zambia'
          ]
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>

</style>
