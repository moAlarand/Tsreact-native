import { DataError, DataErrorsTypes } from '../dataError';
export function handleApiError(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let oldFunc = descriptor.value;
  descriptor.value = async function () {
    try {
      const result = await oldFunc.apply(this, arguments);
      return result;
    } catch (error) {
      if (!error.response) {
        throw new DataError("connection error", DataErrorsTypes.ConnectionError);
      } else {
        throw new DataError("general error", DataErrorsTypes.GeneralError);
      }
    }
  }
}



