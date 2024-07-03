<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Gold and Silver</h1>
        <list-sm :list="['Client Vaulted Bullion', 'Instant Liquidity', 'Accessible 24/7']"/>
      </div>
    </section>
    <section class="inner-page__section">
      <custom-video
        largeImgUrl="tradition_and_technology.jpg"
        smallImgUrl="tradition_and_technology_xs.jpg"
        title="Money and Investment"
        subtitle="Private Swiss Bullion"
        subtitleCenter="Access Globally"
      />
    </section>
    <section class="inner-page__section pt_80">
      <div class="main-container">
        <div class="grid offset_80" data-anim="fadeIn">
          <p class="grid__col text-sm color-light-gray mw-proc_60">Switzerland’s celebrated gold and silver vaults have been the most secure way to protect wealth anywhere in the world for more than 500 years..</p>
          <p class="grid__col text-sm color-light-gray mw-proc_60">The Golden Suisse Bullion Nonbanking system enables clients to access their bullion from any country using our award-winning technology, instantly taking delivery of buy orders and instantly paying out on sell orders.</p>
          <div class="grid__col">
            <p class="text-big">More than Gold and Silver</p>
            <p class=" text-mid offset_30">Golden Suisse makes clients vaulted Gold and Silver bullion holdings accessible on traditional Banking Systems. Clients can convert their bullion to cash in real time, 24/7/365.</p>
          </div>
        </div>
        <div class="metal-price-section">
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">Swiss Refinery 999.9</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="image/goldBar.png"
                title="1 Kg Gold Bar LBMA"
                :table="price.XAU_BAR"
                :bar="true"
                imgDesc="Golden Suisse PX 999.9"
              />
              <metalPrice class="metal-price-section__table"
                img="image/silverBar.png"
                title="1 Kg Silver Bar LBMA"
                :table="price.XAG_BAR"
                :bar="true"
                imgDesc="Swiss Refinery 999.9"
              />
            </div>
          </div>
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">The United States Mint</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="coins/8.png"
                title="1 Oz USD Gold"
                :table="price.XAU"
                imgDesc="American Gold Eagle"
              />
              <metalPrice class="metal-price-section__table"
                img="coins/9.png"
                title="1 Oz USD Silver"
                :table="price.XAG"
                imgDesc="American Silver Eagle"
              />
            </div>
          </div>
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">The Royal Mint</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="coins/5.png"
                title="1 Oz GBP Gold"
                :table="price.GEB"
                imgDesc="Gold Britannia"
              />
              <metalPrice class="metal-price-section__table"
                img="coins/4.png"
                title="1 Oz GBP Silver"
                :table="price.SEB"
                imgDesc="Silver Britannia"
              />
            </div>
          </div>
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">Austrian Mint</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="coins/6.png"
                title="1 Oz EUR Gold"
                :table="price.GAP"
                imgDesc="Gold Austrian Philharmonic"
              />
              <metalPrice class="metal-price-section__table"
                img="coins/7.png"
                title="1 Oz EUR Silver"
                :table="price.SAP"
                imgDesc="Silver Austrian Philharmonic"
              />
            </div>
          </div>
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">South African Mint</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="coins/3.png"
                title="1 Oz SAR Gold"
                :table="price.GSK"
                imgDesc="Gold Krugerrand"
              />
              <metalPrice class="metal-price-section__table"
                img="coins/2.png"
                title="1 Oz SAR Silver"
                :table="price.SSK"
                imgDesc="Silver Krugerrand"
              />
            </div>
          </div>
          <div class="metal-price-section__block">
            <p class="metal-price-section__block-title text-big" data-anim="fadeInSimple" data-anim-delay=".5">Swiss Mint</p>
            <div class="metal-price-section__block-inner">
              <metalPrice class="metal-price-section__table"
                img="coins/1.png"
                title="0.1867 Oz CHF Gold"
                :table="price.SFR"
                imgDesc="20 Sfr Gold Vrenelli"
              />
            </div>
          </div>
        </div>
        <p class="text-desc text-desc_center color-white offset_100" data-anim="fadeIn">Features</p>
        <double-link-list :list="innerPages" class="offset_40"/>
      </div>
    </section>
    <section class="inner-page__section linking">
      <div class="main-container">
        <p class="title-after" data-anim="fadeInSimple">Award Winning Systems</p>
      </div>
      <div class="block-lines block-lines_wide offset_60" data-anim="fadeInSimple">
        <div class="block-lines__col">
          <div class="linking-title-row">
            <nuxt-link class="linking-title-row__title" to="/account/download">GS App</nuxt-link>
            <p class="linking-title-row__desc text-desc">Desktop & Mobile</p>
          </div>
        </div>
        <div class="block-lines__col">
          <div class="linking-title-row">
            <nuxt-link class="linking-title-row__title" to="/payments/card">The Card</nuxt-link>
            <p class="linking-title-row__desc text-desc">Privately vaulted precious metals</p>
          </div>
        </div>
      </div>
    </section>
    <section class="inner-page__section">
      <div class="main-container">
        <div class="button-and-desc offset_100">
          <p class="text-desc text-desc_center bottom-page-desc button-and-desc__desc" data-anim="fadeInSimple">Apply for a <br>Private Swiss Vault Account</p>
          <div class="main-button main-button_center button-and-desc__button">
            <flow-button label="Become a Client" link="/account/register"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import metalPrice from "@/components/updated/metalPrice";
  import listSm from "@/components/updated/listSm";
  import CustomVideo from "@/components/CustomVideo";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  import FlowButton from "@/components/FlowButton";
  export default {
    head() {
      return {
        title: "Golden Suisse - Gold & Silver",
      }
    },
    components: {
      listSm,
      CustomVideo,
      DoubleLinkList,
      metalPrice,
      FlowButton
    },
    computed: {
      ...mapGetters([
        'whitePages/getPagesArray'
      ]),
      innerPages() {
        let categ, pathArray;
        if (this.$route.path.slice(-1) != '/') {
          categ = this.$route.path.split('/').pop();
        }
        else {
          pathArray = this.$route.path.split('/');
          categ = pathArray[pathArray.length - 2];
        }
        let whitePages = JSON.parse(JSON.stringify(this['whitePages/getPagesArray'](categ)));
        if (pathArray) {
          categ = '';
        }
        else {
          categ = categ + '/';
        }
        for (let obj in whitePages) {
          whitePages[obj].path = `${categ}${whitePages[obj].path}`;
        }
        return whitePages;
      }
    },
    data() {
      return {
        price: {
          XAG: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          XAG_BAR: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          XAU: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          XAU_BAR: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          GAP: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          SAP: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          GSK: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          SSK: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          GEB: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          SEB: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
          SFR: {
            CHF: {
              buy_price: "",
              sell_price: "",
            },
            EUR: {
              buy_price: "",
              sell_price: "",
            },
            GBP: {
              buy_price: "",
              sell_price: "",
            },
            USD: {
              buy_price: "",
              sell_price: "",
            },
          },
        },
        api: {},
      };
    },
    methods: {
      numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      },
      async getMetalPrices() {
        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "8f23fe0502ef40331314affa1f570fd4876e70eff211d6c912506e4e200af70fd4876e70eff211d6c91250fbdc6d304239a33c333c1962ba57"
        );

        // let name = "__cfduid";
        // let value = "dce1e56bd342f5dc183338afb502ac2ad1592208793";
        // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
          credentials: "same-origin",
        };

        console.log('api url', this.api.WEBSITE.PRICE);
        await fetch(
          this.api.WEBSITE.PRICE,
          requestOptions
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data.ResponseResult);
            this.price = data.ResponseResult;
            console.log(this.price);
          })
          .catch((error) => console.log("error", error));
      },
      async getJson() {
        await fetch("/api.json", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            this.api = data;
            this.getMetalPrices();
            console.log('api json', this.api);
          });
      },
    },
    beforeMount() {
      this.getJson();
    },

  }
</script>


<style lang="scss" scoped>
  .metal-price-section {
    margin-top: 200px;
    @include adaptive(mob) {
      margin-top: 60px;
    }
  }
  .linking {
    margin-top: 500px;
    @include adaptive(mob) {
      margin-top: 100px;
    }
  }
</style>
