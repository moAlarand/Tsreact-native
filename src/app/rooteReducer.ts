import { combineReducers } from "@reduxjs/toolkit";
import employeesReducer from '../components/employees/employeesSlice';

export const rooteReducer = combineReducers({
  employees: employeesReducer
});


export type RooteStore = ReturnType<typeof rooteReducer>;