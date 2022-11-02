const dishesReducer = (state, { type, payLoad }) => {
  const copy = state.slice();
  switch (type) {
    case "ADD_DISHES":
      return payLoad;
    case "RANK_1":
      for (let dish of copy) {
        if (dish.id === payLoad) {
          dish.r1 = true;
          dish.r2 = false;
          dish.r3 = false;
          dish.noRank = false;
        } else {
          dish.r1 = false;
        }
      }
      return copy;
    case "RANK_2":
      for (let dish of copy) {
        if (dish.id === payLoad) {
          dish.r1 = false;
          dish.r2 = true;
          dish.r3 = false;
          dish.noRank = false;
        } else {
          dish.r2 = false;
        }
      }
      return copy;
    case "RANK_3":
      for (let dish of copy) {
        if (dish.id === payLoad) {
          dish.r1 = false;
          dish.r2 = false;
          dish.r3 = true;
          dish.noRank = false;
        } else {
          dish.r3 = false;
        }
      }
      return copy;

    case "NO_RANK":
      for (let dish of copy) {
        if (dish.id === payLoad) {
          dish.r1 = false;
          dish.r2 = false;
          dish.r3 = false;
          dish.noRank = true;
        }
      }
      return copy;
    default:
      return state;
  }
};

export default dishesReducer;
