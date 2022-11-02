const votesReducer = (state, { type, payLoad }) => {
  const copy = state.slice();
  switch (type) {
    case "RANK_1":
      copy[0] = "";
      copy[0] = payLoad[1];
      return copy;
    case "RANK_2":
      copy[1] = "";
      copy[1] = payLoad[1];
      return copy;
    case "RANK_3":
      copy[2] = "";
      copy[2] = payLoad[1];
      return copy;

    case "NO_RANK":
      for (let x in copy) {
        if (x === payLoad[0]) {
          x[0] = "No Rank";
          x[1] = "No Rank";
          x[2] = "No Rank";
        }
      }

      return copy;

    default:
      return state;
  }
};

export default votesReducer;
