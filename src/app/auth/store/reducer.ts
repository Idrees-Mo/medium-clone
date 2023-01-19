import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions/actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const reducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function authReducer(state: AuthStateInterface, action: Action) {
  return reducer(state, action);
}
