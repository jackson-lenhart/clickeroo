import { h } from "preact";
import { connect } from "preact-redux";
import axios from "axios";

const ClickTable = props => {
  if (props.prevClicks.length === 0) return '';

  const saveDocument = () => {
    axios.post("/api/clickdocs", { totalClicks: props.totalClicks })
      .then(response => {
        response.json();
      }).catch(err => {
        alert(err);
      });
  };

  const htmlContent = props.prevClicks.map((el, index) => {
    return (
      <tr key={index}>
        <td>{el.clickCount}</td>
        <td>{el.clickID}</td>
        <td><a href="#" onClick={() => props.delete(el.clickID, el.clickCount)}>x</a></td>
      </tr>
    )
  });

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
      <p>total clicks: {props.totalClicks}</p>
      <button onClick={props.deleteAll}>Delete All</button>
      <button onClick={saveDocument}>Save Document</button>
    </div>
  );
};

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
    },
    saveDocumentRequest: () => {
      dispatch({
        type: "SAVE_DOCUMENT"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickTable);
