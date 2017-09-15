import { h, Component } from "preact";

import ClickButton from "./click-button";
import ClickTable from "./click-table";
import DocTable from "./doc-table";

export default props => {
  return (
    <div id="container">
      <ClickButton/>
      <ClickTable/>
      <DocTable/>
    </div>
  );
};
