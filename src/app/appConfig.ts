
import { createScreen } from '../navigation';
import { screens } from '../screens';
import { setDefaultOptions } from '../navigation';


//// register fun
export const registerScreens = () => {
  screens.forEach(screen => createScreen(screen));
};

//general app configeration
export const appConfig = () => {
  registerScreens();
  setDefaultOptions();
}