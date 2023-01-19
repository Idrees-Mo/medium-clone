import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { register } from "./actions";

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    register,
    (state): AuthStateInterface => ({ ...state, isSubmitting: true })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
