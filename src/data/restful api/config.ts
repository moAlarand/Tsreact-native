import Axios from 'axios';
import { urls } from '../urls';


export const apiConfig = () => {
  Axios.defaults.baseURL = urls.BASE_URL;
}
