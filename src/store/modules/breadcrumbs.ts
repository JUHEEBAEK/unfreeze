import { Module } from "vuex";
import { RootState } from "../index";

export interface Crumb {
  name: string;
  to: string;
  isActive?: boolean;
}

interface State {
  breadcrumbs: Array<Crumb>;
}

export const state: State = {
  breadcrumbs: []
};

export const breadcrumbs: Module<Crumb, RootState> = {
  namespaced: true,
  state
};
