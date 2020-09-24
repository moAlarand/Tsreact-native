
import { Home } from './home/Home';
import { Screen } from '../navigation'
import { createEmployee } from './createEmployee/CreateEmployee';

export const screens: Screen[] = [
  { name: 'home', component: Home },
  { name: 'create-employee', component: createEmployee }
];

