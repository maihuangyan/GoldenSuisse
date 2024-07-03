<template>
  <div>
    <footer class="p-md-5 p-3" id="aboutUs" style="display: grid;">
      <div class="subscription">
        <EmailSubscribe />
      </div>
      <div class="mid"></div>
      <div class="footer-list-one mb-md-5 mb-3">
        <div class="footerList">
          <div class="footerList__title">Discover</div>
          <ul>
            <li>
              <a href="../payments/">
                Bullion Nonbank
              </a>
            </li>
            <li>
              <a href="../payments/card">Card</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-list-two mb-md-5 mb-3">
        <div class="footerList">
          <div class="footerList__title">WEALTH PROTECTION</div>
          <ul>
            <li>
              <a href="../payments/gold-silver">
                Gold and silver
              </a>
            </li>
            <li>
              <a href="../payments/benefits"
                >Benefits</a
              >
            </li>
            <li>
              <a href="../payments/vault-trust"
                >Vault and Trust</a
              >
            </li>
            <li>
              <a href="../payments/advisory"
                >Advisory</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-list-three mb-md-5 mb-3">
        <div class="footerList">
          <div class="footerList__title">ABOUT</div>
          <ul>
            <li>
              <a href="../company"> Company </a>
            </li>
            <li>
              <a href="../company/governance">Governance</a>
            </li>
            <li>
              <a href="../company/awards">Awards</a>
            </li>
            <li>
              <a href="../company/sustainability"
                >Sustainability</a>
            </li>
            <li>
              <a href="../company/become-partner"
                >Become a Partner</a
              >
            </li>
            <li>
              <a href="../company/rates">Rates</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="second-mid"></div>
      <div class="footer-list-four mb-md-0 mb-3">
        <div class="footerList">
          <div class="footerList__title">CONTACT</div>
          <ul>
            <li>
              <a href="../contact"> Headquarters </a>
            </li>
            <li>
              <a href="../contact/support">Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-list-five mb-md-0 mb-3">
        <div class="footerList">
          <div class="footerList__title">LEGAL</div>
          <ul>
            <li>
              <a href="../vqf-membership">
                VQF Membership
              </a>
            </li>
            <li>
              <a
                href="../_nuxt/img/goldensuisse_terms.6c6e291.pdf"
                target="_blank"
                >Terms and Conditions</a
              >
            </li>
            <li>
              <a
                href="../_nuxt/img/goldensuisse_aml.084c36c.pdf"
                target="_blank"
                >AML</a
              >
            </li>
            <li>
              <a href="../vqf-membership/privacy"
                >Privacy</a
              >
            </li>
            <li>
              <a
                href="../_nuxt/img/goldensuisse_privacypolicy.ea3d1ff.pdf"
                target="_blank"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="../vqf-membership/information"
                >Legal information</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-list-six">
        <div class="footerList">
          <div class="footerList__title">MY ACCOUNT</div>
          <ul>
            <li>
              <a href="../account"> Login </a>
            </li>
            <li>
              <a href="../account/register"
                >Open an Account</a
              >
            </li>
            <li>
              <a href="../account/download"
                >Download Apps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="copy_right w-100">
      <div class="copy_right_inner">
          <div class="left">
              <a href="https://apps.apple.com/us/app/goldensuisse/id1236821991">
                  <div class="image">
                      <img src="@/assets/images/appstore-logo.png" alt="">
                  </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US">
                  <div class="image">
                      <img src="@/assets/images/google-play-logo.png" alt="">
                  </div>
              </a>
          </div>
          <p>
              © GoldenSuisse 2021. All rights reserved.
          </p>
          <p></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {
    EmailSubscribe: () => import("@/components/Footer/EmailSubscribe"),
  }
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

footer {
  background: #101010;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(8, 1fr);
}

.subscription {
  grid-column: span 2 / span 2;
  grid-row: span 1 / span 1;
}

.mid {
  grid-column: span 3 / span 3;
  grid-row: span 1 / span 1;
}

.second-mid {
  grid-column: span 5 / span 5;
  grid-row: span 2 / span 2;
}

.footer-list-one {
  grid-column: span 1 / span 1;
  grid-row: span 1 / span 1;
}

.footer-list-two {
  grid-column: span 1 / span 1;
  grid-row: span 1 / span 1;
}

.footer-list-three {
  grid-column: span 1 / span 1;
  grid-row: span 1 / span 1;
}

footer input {
  width: 100%;
  background: 0 0;
  color: #fff;
  line-height: 143%;
  letter-spacing: -0.02em;
  font-size: 16px;
  padding: 0 0 10px;
  outline: 0;
  display: block;
  border: none;
  border-bottom: 1px solid #585858;
}

footer label {
  text-transform: uppercase;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: #585858;
  font-size: 14px;
  pointer-events: none;
  transition: all 0.2s ease;
}

.email-sub {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: #585858;
}

.emailSub-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
}

.footerList__title {
  font-weight: 700;
  line-height: 143%;
  text-transform: uppercase;
  color: #585858;
}

.footerList {
  font-size: 14px;
  letter-spacing: -0.02em;
}

.footerList ul {
  padding: 30px 0 0;
  list-style: none;
}

.footerList ul li {
  margin-bottom: 10px;
}

.footerList a {
  color: #fff;
}

@media (max-width: 1199.98px) {
  .mid {
    grid-column: span 1 / span 2;
    grid-row: span 1 / span 1;
  }
  .footer-list-one,
  .footer-list-two,
  .footer-list-three,
  .footer-list-four,
  .footer-list-five,
  .footer-list-six {
    grid-column: span 2 / span 1;
    grid-row: span 1 / span 1;
  }

  .subscription {
    grid-column: span 3 / span 2;
    grid-row: span 1 / span 1;
  }
  .second-mid {
    display: none;
  }
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
  .mid {
    display: none;
  }
  .footer-list-one,
  .footer-list-two,
  .footer-list-three,
  .footer-list-four,
  .footer-list-five,
  .footer-list-six {
    grid-column: span 8 / span 1;
    grid-row: span 1 / span 1;
  }

  .subscription {
    grid-column: span 8 / span 2;
    grid-row: span 1 / span 1;
  }
  .second-mid {
    display: none;
  }
  .footerList ul {
    padding: 16px 0 0;
  }
}
@media (max-width: 575.98px) {
}

.copy_right{
    background: #101010;
    padding: 3rem !important;
    padding-top: 0px !important;
}
.copy_right_inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.copy_right_inner .left{
    display: flex;
    align-items: center;
}
.copy_right_inner .image{
    min-width: 118px;
    max-width: 118px;
    width: 8.2vw;
    margin-right: 1rem;
    border-radius: 8px;
}
.copy_right_inner .left a:last-of-type .image{
    margin-right: 0rem;
}
.copy_right_inner .image img{
    width: 100%;
    height: 100%;
}
.copy_right_inner p{
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #585858;
    margin: 0px;
    line-height: 16px;
}
@media (max-width: 767.98px){
    .copy_right_inner{
        flex-direction: column;
    }
    .copy_right_inner .image{
        margin-bottom: 1rem;
    }
}
</style>
