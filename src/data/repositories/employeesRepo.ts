import { Employee } from '../models';
import { EmployeesApi } from '../restful api';
import uploadFile from '../uploadFile';

export class EmployeesRepo {
  private static employeesRepo: EmployeesRepo;
  private employeesApi: EmployeesApi = EmployeesApi.instance;
  private constructor() { }

  static get instance() {
    if (!EmployeesRepo.employeesRepo) {
      EmployeesRepo.employeesRepo = new EmployeesRepo();
    }
    return EmployeesRepo.employeesRepo;
  };


  getAllEmployees = this.employeesApi.getAllEmployees;

  createEmployee = async (employee: Employee) => {
    const url = await uploadFile(employee.img);
    return this.employeesApi.createEmployee({ ...employee, img: url });
  }

  editEmployee = async (employee: Employee) => {
    const url = employee.img.includes("https://") ? employee.img : await uploadFile(employee.img);
    return this.employeesApi.editeEmployee({ ...employee, img: url });
  }

  deleteEmployee = this.employeesApi.deleteEmployee;

}