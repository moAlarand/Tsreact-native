import { Utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { DataError, DataErrorsTypes } from './dataError';

export default async function (uri: string): Promise<string | never> {
  const image_name = uri.split('/').pop();
  const reference = storage().ref(`/employees-images/${image_name}`);
  try {
    await reference.putFile(uri);
    const url = await reference.getDownloadURL();
    console.log("url", url)
    return url;
  } catch (error) {
    throw new DataError('general Error', DataErrorsTypes.GeneralError);
  }

}