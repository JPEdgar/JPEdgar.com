import React from "react";

import TagLine from "./TagLine";

function MainHeader() {
  //
  return (
    <div>
      <TagLine />
      <p className="redWarning middle">
        Due to COVID-19, print/ship times have been extended. <br />
        Please be patient on your orders.
      </p>
    </div>
  );
}

export default MainHeader;
