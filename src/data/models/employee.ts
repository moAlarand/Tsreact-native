export interface Employee {
  id?: string,
  name: string,
  img: string,
  age: number | null
}


export type ResponseDataEmployees = { [key: string]: Employee };

export class Employees {

  static fromResponseData(data: ResponseDataEmployees): Employee[] {
    return Object.entries(data).map(([id, employee]) => ({ id, ...employee }));
  }
}
