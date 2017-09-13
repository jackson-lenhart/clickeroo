import { h } from "preact";
import { connect } from "preact-redux";

const ClickButton = props => {
  return (
    <div id="clickButton">
      <button onClick={props.click}>More</button>
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
    click: () => {
      dispatch({
        type: "CLICK",
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

export default connect(mapStateToProps, mapDispatchToProps)(ClickButton);
