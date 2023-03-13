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

export const setQuestion = (payload) => ({
  type: SET_QUESTION,
  payload,
})

export const setAnswer = (payload) => ({
  type: SET_ANSWER,
  payload,
})

export const setMode = (payload) => ({
  type: SET_MODE,
  payload,
})

export const setSuggestion = (payload) => ({
  type: SET_SUGGESTION,
  payload,
})

export const setNoAnswer = (payload) => ({
  type: SET_NO_ANSWER,
  payload,
})

export const setOnlyCountry = (payload) => ({
  type: SET_ONLY_COUNTRY,
  payload,
})

export const setHiddenInQuestion = (payload) => ({
  type: SET_HIDDEN_IN_QUESTION,
  payload,
})

export const setHiddenInAnswer = (payload) => ({
  type: SET_HIDDEN_IN_ANSWER,
  payload,
})

export const setContinent = (payload) => ({
  type: SET_CONTINENT,
  payload,
})

export const setMark = (payload) => ({
  type: SET_MARK,
  payload,
})

export const setQuestionMark = (payload) => ({
  type: SET_QUESTION_MARK,
  payload,
})

export const setForce = (payload) => ({
  type: SET_FORCE,
  payload,
})

export const setTypeUncoveredQuestion = (payload) => ({
  type: SET_TYPE_UNCOVERED_QUESTION,
  payload,
})

export const setColumnCellQuestion = (payload) => ({
  type: SET_COLUMN_CELL_QUESTION,
  payload,
})

export const setRowCellQuestion = (payload) => ({
  type: SET_ROW_CELL_QUESTION,
  payload,
})

export const setTypeUncoveredAnswer = (payload) => ({
  type: SET_TYPE_UNCOVERED_ANSWER,
  payload,
})

export const setColumnCellAnswer = (payload) => ({
  type: SET_COLUMN_CELL_ANSWER,
  payload,
})

export const setRowCellAnswer = (payload) => ({
  type: SET_ROW_CELL_ANSWER,
  payload,
})
