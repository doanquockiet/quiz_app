import {
  CHANGE_DIFFICULTY,
  CHANGE_CATEGORY,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./actionsTypes";

const initialState = {
  question_categiory: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: 50,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_categiory: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
