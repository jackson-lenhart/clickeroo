import { h, Component } from "preact";

import ClickButtons from "./click-buttons";
import ClickTable from "./click-table";
import DocTable from "./doc-table";

export default props => {
  return (
    <div id="container">
      <ClickButtons/>
      <ClickTable/>
      <DocTable/>
    </div>
  );
};
