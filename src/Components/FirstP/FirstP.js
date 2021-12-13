import React from "react";

function FirstP(props) {
  return (
    <section className={props.wrapperClass}>
      <div className="container">
        <div className={`title-wrapper ${props.titleWrapperColor}`}>
          {props.title}
        </div>
        <div className={`brief-description ${props.discriprtionColor}`}>
          {props.discription}
        </div>
        <div className={`price-wrapper ${props.priceColor}`}>
          {props.price1}
          <br />
          {props.price2}{" "}
          <sup>
            <a className={props.footNoteColor} href={props.footNoteLink}>
              {props.footNoteNum}
            </a>
          </sup>
        </div>
        <div className={`carrier-wrapper ${props.carrierColor}`}>
          {props.carrierText1} <br /> {props.carrierText2}
        </div>
        <div className={`links-wrapper ${props.linksColor} ${props.bgc}`}>
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FirstP;
