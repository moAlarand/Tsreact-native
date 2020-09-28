import Axios, { AxiosResponse } from 'axios';
import { Employee, Employees, ResponseDataEmployees } from '../models';
import { handleApiError } from './decorators';
export class EmployeesApi {
  private static employeeApi: EmployeesApi;
  private constructor() { }

  static get instance() {
    if (!EmployeesApi.employeeApi) {
      EmployeesApi.employeeApi = new EmployeesApi();
    }
    return EmployeesApi.employeeApi;
  };


  @handleApiError
  async getAllEmployees(): Promise<Employee[] | never> {
    const res: AxiosResponse<ResponseDataEmployees> = await Axios.get('/employees.json');
    return Employees.fromResponseData(res.data);
  }

  @handleApiError
  async createEmployee(employee: Employee): Promise<Employee | never> {
    const res: AxiosResponse<Pick<Employee, 'id'>> = await Axios.post('/employees.json', employee);
    return { ...employee, id: res.data.id };
  }

  @handleApiError
  async editeEmployee(employee: Employee): Promise<Employee | never> {
    const res: AxiosResponse<Employee> = await Axios.put(`/employees/${employee.id}.json`, employee);
    return res.data;
  }
}