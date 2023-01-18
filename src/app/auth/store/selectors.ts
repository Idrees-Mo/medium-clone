import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/currentUser.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSelector = (state: AppStateInterface) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
