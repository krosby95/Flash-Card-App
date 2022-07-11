import React from "react";
import {Link} from "react-router-dom";

function BreadCrumb({linkName="", link="", pageName='Page name'}) {
  return (
    <nav>
      <ol>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {link !== "" ? 
          <li>
          <p></p>
          <Link to={link}>{linkName}</Link>
          </li>
         : ""}
        
        <li>
          <p>{pageName}</p>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb