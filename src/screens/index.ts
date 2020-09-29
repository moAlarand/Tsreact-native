
import { Home } from './home/Home';
import { Screen } from '../navigation'
import { CreateEmployee } from './createEmployee/CreateEmployee';
import { EmployeeDetails } from './employeeDetails/EmployeeDetails';

export const screens: Screen[] = [
  { name: 'home', component: Home },
  { name: 'create-employee', component: CreateEmployee },
  { name: 'employee-details', component: EmployeeDetails }
];

