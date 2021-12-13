import React from "react";

function FourthP(props) {
  return (
    <section className={props.wrapperClass}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 ${props.wrapperSide}`}>
            <div className={props.containerSide}>
              <div className={`${props.wrapperName} ${props.titleColor}`}>
                {props.title} {props.promo1}
                {props.promobr1} {props.promo2}
                {props.promobr2} {props.promo3}
                {props.footnote}
              </div>
              <div className="brief-description">{props.discription}</div>
              <div className={`links-wrapper ${props.bgc}`}>
                <ul>
                  {props.link1}
                  {props.link2}
                  {props.link3}

                  {/* <li><a href={linkUrl}>{props.linkText}</a></li>
                                    <li><a href={linkUrl}>{props.linkText2}</a></li> */}
                  {/* <li><a href="">Buy</a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-6 ${props.wrapperSide2}`}>
            <div className={props.containerSide2}>
              <div className="top-logo-wrapper">
                {props.discription22}
                <div
                  className={` logo-wrapper ${props.wrapperName2} ${props.titleColor}`}
                >
                  {props.image} {props.title2}
                </div>
              </div>
              <div className={`brief-description ${props.discriptionColor2}`}>
                {props.discription2}
                <div className={`links-wrapper ${props.bgc2}`}>
                  <ul>
                    {props.link1}
                    {props.link2}
                    {props.link4}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthP;
