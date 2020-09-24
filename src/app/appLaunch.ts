import { navgateToHome, navgateToAuth } from '../navigation';

export const onAppLaunch = () => {
  // authenticated
  navgateToHome();
  //noAuth
  // navgateToAuth();
}