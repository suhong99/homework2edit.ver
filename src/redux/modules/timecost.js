const TIME_SUM = "timecost/TIME_SUM";

// Action Creator
export const timeSum = (time) => {
  return {
    type: TIME_SUM,
    time, //자바es6에서 키랑 벨류가 같으면  :없이 가능 payload:payload
  };
};

const initialState = {
  timecost: 0,
};

// Reducer
const timecost = (state = initialState, action) => {
  // console.log(state, +"state");

  switch (action.type) {
    case TIME_SUM: {
      return { ...state, timecost: action.time };
    }

    default:
      return state;
  }
};
// export default reducer
export default timecost;
