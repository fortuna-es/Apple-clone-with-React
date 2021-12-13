import React from "react";

function HeaderLinks(props) {
  return (
    <li className={`nav-item ${props.cname}`}>
      <a className="nav-link js-scroll-trigger" href={props.linkUrl}>
        {props.linkName}
        {props.image}
      </a>
    </li>
  );
}

export default HeaderLinks;
