import {
  SET_QUESTION,
  SET_ANSWER,
  SET_MODE,
  SET_SUGGESTION,
  SET_NO_ANSWER,
  SET_ONLY_COUNTRY,
  SET_HIDDEN_IN_QUESTION,
  SET_HIDDEN_IN_ANSWER,
  SET_CONTINENT,
  SET_MARK,
  SET_QUESTION_MARK,
  SET_FORCE,
  SET_TYPE_UNCOVERED_QUESTION,
  SET_COLUMN_CELL_QUESTION,
  SET_ROW_CELL_QUESTION,
  SET_TYPE_UNCOVERED_ANSWER,
  SET_COLUMN_CELL_ANSWER,
  SET_ROW_CELL_ANSWER,
} from './constants'

const initState = {
  question: 0,
  answer: 0,
  mode: false,
  suggestion: false,
  noAnswer: 0,
  onlyCountry: false,
  hiddenInQuestion: false,
  hiddenInAnswer: false,
  continent: 0,
  mark: 0,
  questionMark: 0,
  force: false,
  typeUncoveredQuestion: false,
  columnCellQuestion: 10,
  rowCellQuestion: 10,
  typeUncoveredAnswer: false,
  columnCellAnswer: 10,
  rowCellAnswer: 10,
}

function reducer(state, action) {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload,
      }
    case SET_ANSWER:
      return {
        ...state,
        answer: action.payload,
      }
    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      }
    case SET_SUGGESTION:
      return {
        ...state,
        suggestion: action.payload,
      }
    case SET_NO_ANSWER:
      return {
        ...state,
        noAnswer: action.payload,
      }
    case SET_ONLY_COUNTRY:
      return {
        ...state,
        onlyCountry: action.payload,
      }
    case SET_HIDDEN_IN_QUESTION:
      return {
        ...state,
        hiddenInQuestion: action.payload,
      }
    case SET_HIDDEN_IN_ANSWER:
      return {
        ...state,
        hiddenInAnswer: action.payload,
      }
    case SET_CONTINENT:
      return {
        ...state,
        continent: action.payload,
      }
    case SET_MARK:
      return {
        ...state,
        mark: action.payload,
      }
    case SET_QUESTION_MARK:
      return {
        ...state,
        questionMark: action.payload,
      }
    case SET_FORCE:
      return {
        ...state,
        force: action.payload,
      }
    case SET_TYPE_UNCOVERED_QUESTION:
      return {
        ...state,
        typeUncoveredQuestion: action.payload,
      }
    case SET_COLUMN_CELL_QUESTION:
      return {
        ...state,
        columnCellQuestion: action.payload,
      }
    case SET_ROW_CELL_QUESTION:
      return {
        ...state,
        rowCellQuestion: action.payload,
      }
    case SET_TYPE_UNCOVERED_ANSWER:
      return {
        ...state,
        typeUncoveredAnswer: action.payload,
      }
    case SET_COLUMN_CELL_ANSWER:
      return {
        ...state,
        columnCellAnswer: action.payload,
      }
    case SET_ROW_CELL_ANSWER:
      return {
        ...state,
        rowCellAnswer: action.payload,
      }
    default:
      throw new Error('Invalid action.')
  }
}

export { initState }
export default reducer
