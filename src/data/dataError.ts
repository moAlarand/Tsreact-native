export enum DataErrorsTypes {
  ConnectionError,
  GeneralError
}

export class DataError extends Error {
  constructor(message: string, public type: DataErrorsTypes) { super(message); }
}