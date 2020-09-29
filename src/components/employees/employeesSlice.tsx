import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Employee} from '../../data';
import {EmployeesRepo} from '../../data';
import {AppThunk} from '../../app/store';
import {FormikHelpers} from 'formik';

interface EmployeesState {
  data: Employee[];
  loading: boolean;
  deletingEmployeeId: string | null;
  error: string | null;
  success: string | null;
}

const initialState: EmployeesState = {
  data: [],
  loading: false,
  deletingEmployeeId: null,
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
    startDelete(state, action: PayloadAction<string>) {
      state.deletingEmployeeId = action.payload;
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
    employeeDeleted(state, action: PayloadAction<string>) {
      state.deletingEmployeeId = null;
      const newData = state.data.filter(({id}) => action.payload != id);
      state.data = newData;
      state.success = 'success deleted';
      state.error = null;
    },
    success(state, action: PayloadAction<Employee[]>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    failed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.deletingEmployeeId = null;
      state.error = action.payload;
    },
    reset(state) {
      state.loading = false;
      state.deletingEmployeeId = null;
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
  employeeDeleted,
  startDelete,
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

export const deleteEmployee = (id: string): AppThunk => async (dispatch) => {
  dispatch(startDelete(id));
  try {
    await EmployeesRepo.instance.deleteEmployee(id);
    dispatch(employeeDeleted(id));
  } catch (error) {
    dispatch(failed(error.message));
  }
};
