import {
  SET_CURRENCY,
  SET_LANGUAGE,
  SET_SIDEBAR,
} from "../app-reducer";

export function setSidebarAction(isSidebar) {
  return (dispatch) => dispatch({ type: SET_SIDEBAR, payload: isSidebar });
}

export function setLanguageAction(language) {
  return (dispatch) => dispatch({ type: SET_LANGUAGE, payload: language });
}

export function setCurrencyAction(currency) {
  return (dispatch) => dispatch({ type: SET_CURRENCY, payload: currency });
}
