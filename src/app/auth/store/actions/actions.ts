import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { authActionTypes } from "../actionTypes";

export const registerAction = createAction(
  authActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
