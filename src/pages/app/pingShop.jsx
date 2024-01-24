import React, { Fragment, useRef, useState, useEffect } from "react";

export const KkutuPing = (props) => {

  return (
  <div>
    <img src="/pingshop/main.png" usemap="#image_map"/>
    <map name="image_map">
      <area alt="50핑 구매" title="50핑 구매" href="https://mapi.pcor.me/form/buy_ping.php?iid=1" coords="273,287,373,317" shape="rect"/>
      <area alt="100핑 구매" title="100핑 구매" href="https://mapi.pcor.me/form/buy_ping.php?iid=2" coords="272,370,374,398" shape="rect"/>
      <area alt="300핑 구매" title="300핑 구매" href="https://mapi.pcor.me/form/buy_ping.php?iid=3" coords="273,452,372,481" shape="rect"/>
      <area alt="500핑 구매" title="500핑 구매" href="https://mapi.pcor.me/form/buy_ping.php?iid=4" coords="273,535,373,564" shape="rect"/>
    </map>
  </div>
  );
};
