import React from "react";

import TagLine from "./TagLine";
import "../styles.css";

function MainHeader() {
  //
  return (
    <div>
      <TagLine />
      <p className="redWarning">
        Due to COVID-19, print/ship times have been extended. <br />
        Please be patient on your orders.
      </p>
    </div>
  );
}

export default MainHeader;
