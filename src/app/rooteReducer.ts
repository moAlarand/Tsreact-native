import { combineReducers } from "@reduxjs/toolkit";
import employeesReducer from '../features/employees/employeesSlice';

export const rooteReducer = combineReducers({
  employees: employeesReducer
});


export type RooteStore = ReturnType<typeof rooteReducer>;