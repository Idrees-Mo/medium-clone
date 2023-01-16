import { createAction, props } from "@ngrx/store";
import { authActionTypes } from "./actionTypes";

export const register = createAction(
  authActionTypes.REGISTER,
  props<{ username: string; email: string; password: string }>()
);
