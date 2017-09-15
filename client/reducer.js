import shortid from "shortid";

export default (state = {
  currentClicks: 0,
  prevClicks: [],
  totalClicks: 0,
  success: false
}, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        currentClicks: state.currentClicks + action.payload
      };
      break;
    case "SUBTRACT":
      return {
        ...state,
        currentClicks: state.currentClicks - action.payload
      };
      break;
    case "CREATE_ENTRY":
      const id = shortid.generate();
      return {
        ...state,
        currentClicks: 0,
        prevClicks: [
          ...state.prevClicks,
          {
            clickCount: state.currentClicks,
            clickID: id
          }
        ],
        totalClicks: state.totalClicks + state.currentClicks
      };
      break;
    case "DELETE":
      //remove element from prevClicks
      return {
        ...state,
        prevClicks: state.prevClicks.filter(click => {
          return click.clickID !== action.payload.id;
        }),
        totalClicks: state.totalClicks - action.payload.clickCount
      };
      break;
    case "DELETE_ALL":
      return {
        ...state,
        currentClicks: state.currentClicks,
        prevClicks: [],
        totalClicks: 0
      };
      break;
    default:
      return state;
  }
};
