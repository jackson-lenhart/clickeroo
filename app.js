import { h, Component } from "preact";

import ClickButton from "./click-button";
import ClickTable from "./click-table";

class App extends Component {
  render() {
    return (
      <div id="container">
        <ClickButton/>
        <ClickTable/>
      </div>
    );
  }
}

export default App;
