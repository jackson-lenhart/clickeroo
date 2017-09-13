import { h, Component } from "preact";

import ClickButton from "./click-button";
import ClickTable from "./click-table";

export default props => {
  return (
    <div id="container">
      <ClickButton/>
      <ClickTable/>
    </div>
  );
};
