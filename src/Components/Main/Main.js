import React from "react";

// third
import FirstP from "../FirstP/FirstP";
// fourth
import logo from "../../images/logos/promo_logo_watch_series_6_lte__el1kwqt2v52e_small_2x (1).png";
// fifth
import FourthP from "../FourthP/FourthP";
// sixth
import promo from "../../images/logos/promo_logo_ted_lasso_s2__fe51b5rt5yuu_small_2x.png";
import tlogo from "../../images/logos/promo_logo_ted_lasso_s2__fe51b5rt5yuu_small_2x.png";
import toplogo from "../../images/logos/logo__dcojfwkzna2q_small_2x.png";

function Main() {
  return (
    <div>
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-text">
            <a href="#">Shop online</a> and get Specialist help, free no-contact
            delivery, and more.
          </div>
        </div>
      </section>

      <FirstP
        wrapperClass="first-highlight-wrapper"
        titleWrapperColor="black"
        title="iPhone 12"
        discriprtionColor="black"
        discription="Blast past fast."
        priceColor="grey"
        price1="From $29.12/mo. for 24 mo."
        price2="or $699 before trade‑in"
        footNoteColor="grey"
        footNoteLink="#footnote1"
        footNoteNum="1"
        carrierColor="grey"
        carrierText1="Buy directly from Apple"
        carrierText2="with special carrier offers"
      />

      <FirstP
        wrapperClass="second-highlight-wrapper"
        titleWrapperColor="white"
        title="iPhone 12 Pro"
        discriprtionColor="white"
        discription="It’s a leap year."
        priceColor="grey"
        price1="From $41.62/mo. for 24 mo."
        price2="or $999 before trade‑in"
        footNoteColor="grey"
        footNoteLink="#footnote2"
        footNoteNum="2"
        carrierColor="grey"
        carrierText1="Buy directly from Apple"
        carrierText2="special carrier offers"
        bgc="black-bg-link"
      />

      <FirstP
        wrapperClass="third-highlight-wrapper"
        titleWrapperColor="white"
        title="iPad Pro"
        discriprtionColor="white"
        discription="Supercharged by the Apple M1 chip."
        linksColor="grey"
        bgc="black-bg-link"
      />

      <FourthP
        wrapperClass="fourth-highlight-wrapper"
        wrapperSide="left-side-wrapper"
        containerSide="left-side-container"
        wrapperName="title-wrapper"
        titleColor="black"
        title="iMac"
        discription="Say hello."
        bgc="white-bg-link"
        link1={
          <li>
            <a href="">Learn more</a>
          </li>
        }
        link2={
          <li>
            <a href="">Buy</a>
          </li>
        }
        wrapperSide2="right-side-wrapper"
        containerSide2="right-side-container"
        image={<img src={logo} />}
        discriptionColor2="white"
        discription2="The future of health is on your wrist."
        bgc2="black-bg-link"
      />

      <FourthP
        wrapperClass="fifth-highlight-wrapper"
        wrapperSide="left-side-wrapper"
        containerSide="left-side-container"
        wrapperName="promo-wrapper"
        titleColor="black"
        promo1="Buy a Mac or iPad"
        promobr1={<br />}
        promo2="for college."
        promobr2={<br className="b2" />}
        promo3="get AirPods."
        footnote={
          <sup>
            <a className="black" href="#footnote3">
              3
            </a>
          </sup>
        }
        bgc="white-bg-link"
        link3={
          <li>
            <a href="">Save with education pricing</a>
          </li>
        }
        wrapperSide2="right-side-wrapper"
        containerSide2="right-side-container"
        wrapperName2="title-wrapper"
        titleColor="black"
        discription22="Today at Apple"
        title2="Virtual sessions"
        discriptionColor2="black"
        discription2="Learn the basics of using iPhone, iPad, and Mac live with Apple Creatives"
        bgc2="white-bg-link"
        link4={
          <li>
            <a href="">Sign up</a>
          </li>
        }
      />

      <section className="sixth-highlight-wrapper">
        <div className="conntainer-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={toplogo} />
                  </div>
                </div>
                <div className="brief-description white">
                  Introducing Spatial Audio with Dolby Atmos.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li className="listen mx-auto">
                      <a href="#">Listen now</a>
                      <sup>
                        <a className="white" href="#footnote4">
                          4
                        </a>
                      </sup>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-up-right white"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={tlogo} />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={promo} />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#">Watch Season 2 trailer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="youtubeVideosWrapper top-100">
        {/* <Youtube /> */}
      </section>
    </div>
  );
}

export default Main;
