import { Navigation } from "react-native-navigation";
import { appConfig } from './appConfig';
import { onAppLaunch } from './appLaunch';

export const startApp = () => {
  appConfig();
  Navigation.events().registerAppLaunchedListener(() => {
    onAppLaunch();
  });
};
