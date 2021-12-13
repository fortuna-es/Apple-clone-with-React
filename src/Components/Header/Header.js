import React from "react";
import logo from "../../images/icons/logo-sm.png";
import cart from "../../images/icons/cart-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import HeaderLinks from "./HeaderLinks/HeaderLinks";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar  navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right order-first"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            =
          </button>

          <a className="navbar-brand mx-auto order-second" href="/">
            <img src={logo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item search1">
                <a href="/" className="nav-link js-scroll-trigger ">
                  <button type="search" className="input1">
                    <span className="ml-auto">
                      <i className="bi bi-search"></i> search apple.com
                    </span>
                  </button>
                </a>
              </li>

              <HeaderLinks linkUrl="/mac" linkName="Mac" />
              <HeaderLinks linkUrl="/iphone" linkName="iphone" />
              <HeaderLinks linkUrl="/ipad" linkName="ipad" />
              <HeaderLinks linkUrl="/watch" linkName="watch" />
              <HeaderLinks linkUrl="/tv" linkName="tv" />
              <HeaderLinks linkUrl="/airpods" linkName="Airpods" />
              <HeaderLinks linkUrl="/Support" linkName="Support" />
              <HeaderLinks
                cname="search2"
                linkUrl="/search"
                image={<img src={search} />}
              />
              {/* <HeaderLinks cname="cart1" linkUrl="/Support" image={<img
                                    src={cart}/>} /> */}
            </ul>
          </div>
          <a
            className="nav-link js-scroll-trigger order-third cart2 cart1"
            href="/cart"
          >
            <img src={cart} />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
