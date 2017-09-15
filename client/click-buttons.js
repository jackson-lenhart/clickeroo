import { h } from "preact";
import { connect } from "preact-redux";

const ClickButtons = props => {
  return (
    <div id="clickButton">
      <button onClick={props.add}>More</button>
      <button onClick={props.subtract}>Less</button>
      <p>{props.currentClicks}</p>
      <button onClick={props.finish}>Done</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentClicks: state.currentClicks,
    prevClicks: state.prevClicks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch({
        type: "ADD",
        payload: 1
      });
    },
    subtract: () => {
      dispatch({
        type: "SUBTRACT",
        payload: 1
      });
    },
    finish: () => {
      dispatch({
        type: "CREATE_ENTRY"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickButtons);
