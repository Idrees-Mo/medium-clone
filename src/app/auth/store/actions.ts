import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { authActionTypes } from "./actionTypes";

export const register = createAction(
  authActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
