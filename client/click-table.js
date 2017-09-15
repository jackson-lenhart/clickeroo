import { h, Component } from "preact";
import { connect } from "preact-redux";

class ClickTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };

    this.saveDoc = this.saveDoc.bind(this);
  }

  saveDoc() {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ totalClicks: this.props.totalClicks })
    };

    fetch("/api/clickdocs", config).then(response => {
      this.setState({ success: true });
      return response.json();
    }).catch(err => {
      console.log(err);
    });

    setTimeout(() => {
      this.setState({ success: false });
    }, 5000);
  }

  render() {
    if (this.props.prevClicks.length === 0) return '';

    const htmlContent = this.props.prevClicks.map((el, index) => {
      return (
        <tr key={index}>
          <td>{el.clickCount}</td>
          <td>{el.clickID}</td>
          <td><a href="#" onClick={() => this.props.delete(el.clickID, el.clickCount)}>x</a></td>
        </tr>
      )
    });

    let successMsg = "";
    if (this.state.success) {
      successMsg = (
        <small style={{color: "green"}}>Document has been saved.</small>
      );
    }

    return (
      <div>
        <table>
          <tr>
            <th>Click Count</th>
            <th>ID</th>
            <th>Delete</th>
          </tr>
          {htmlContent}
        </table>
        <p>total clicks: {this.props.totalClicks}</p>
        <button onClick={this.props.deleteAll}>Delete All</button>
        <button onClick={this.saveDoc}>Save Document</button>
        <br/>
        {successMsg}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prevClicks: state.prevClicks,
    totalClicks: state.totalClicks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (id, clickCount) => {
      dispatch({
        type: "DELETE",
        payload: {
          id,
          clickCount
        }
      });
    },
    deleteAll: () => {
      dispatch({
        type: "DELETE_ALL"
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickTable);
