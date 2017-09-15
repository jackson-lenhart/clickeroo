import { h, Component } from "preact";
import map from "lodash/map";

class DocTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickdocs: [],
      error: ""
    };

    this.showDocs = this.showDocs.bind(this);
    this.hideDocs = this.hideDocs.bind(this);
  }

  showDocs() {
    const header = {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    let clickdocPromises = [];
    for (let i = 1; i < 17; i++) {
      clickdocPromises.push(
        fetch(`api/clickdocs/${i}`, header).then(res => {
          return res.json();
        })
      );
    }

    Promise.all(clickdocPromises).then(clickdocs => {
      this.setState({ clickdocs });
    }).catch(error => {
      this.setState({ error });
    });
  }

  hideDocs() {
    this.setState({ clickdocs: [] });
  }

  render() {
    if (this.state.clickdocs.length === 0) {
      return (
        <button onClick={this.showDocs}>Show Documents</button>
      );
    }

    const content = this.state.clickdocs.map((el, i) => {
      return (
        <tr key={i}>
          <td>clickdoc</td>
          <td>{el.clickdoc.totalClicks}</td>
        </tr>
      );
    });

    return (
      <div>
        <button onClick={this.hideDocs}>Hide Documents</button>
        <div style={{paddingTop: "15px"}}>
          <table>{content}</table>
          {this.state.error}
        </div>
      </div>
    );
  }
}

export default DocTable;
