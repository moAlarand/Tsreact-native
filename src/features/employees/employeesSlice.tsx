import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Employee} from '../../data';
import {EmployeesRepo} from '../../data';
import {AppThunk} from '../../app/store';
import {FormikHelpers} from 'formik';

interface EmployeesState {
  data: Employee[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: EmployeesState = {
  data: [],
  loading: false,
  error: null,
  success: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
      state.error = null;
    },
    addNewEmployee(state, action: PayloadAction<Employee>) {
      state.loading = false;
      state.data.push(action.payload);
      state.success = 'success';
      state.error = null;
    },
    editeEmployee(state, action: PayloadAction<Employee>) {
      state.loading = false;
      const index = state.data.findIndex(({id}) => action.payload.id == id);
      state.data[index] = action.payload;
      state.success = 'success';
      state.error = null;
    },
    success(state, action: PayloadAction<Employee[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    failed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    reset(state) {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
});

export const {
  success,
  failed,
  start,
  addNewEmployee,
  editeEmployee,
  reset,
} = employeesSlice.actions;
export default employeesSlice.reducer;

export const fetchAllEmployees = (): AppThunk => async (dispatch) => {
  dispatch(start());
  try {
    const employees = await EmployeesRepo.instance.getAllEmployees();
    dispatch(success(employees));
  } catch (error) {
    dispatch(failed(error.message));
  }
};

export const creatorEditEmployee = (
  employee: Employee,
  {setSubmitting, resetForm}: FormikHelpers<Employee>,
): AppThunk => async (dispatch) => {
  dispatch(start());
  try {
    if (employee.id) {
      const editedEmp = await EmployeesRepo.instance.editEmployee(employee);
      dispatch(editeEmployee(editedEmp));
    } else {
      const newEmployee = await EmployeesRepo.instance.createEmployee(employee);
      dispatch(addNewEmployee(newEmployee));
      resetForm();
    }
  } catch (error) {
    dispatch(failed(error.message));
  }
  setSubmitting(false);
};
