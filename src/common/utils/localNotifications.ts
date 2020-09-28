import Snackbar from 'react-native-snackbar';
// import I18n from 'react-native-i18n';

// import { getTheme } from '../Theme';
// import { getThemeColor } from './colors';
// // import store from '../../store/store';
import { appColors } from '../Theme/colors';




// export const showInfo = message => {
//   // const rtl = store.getState().lang.rtl;
//   const rtl = false;
//   Snackbar.show({
//     text: message,
//     rtl,
//     duration: Snackbar.LENGTH_LONG,
//     backgroundColor: getThemeColor(
//       getTheme().localNotifications.info.backgroundColor,
//     ),
//     action: {
//       text: I18n.t('ui-close'),
//       textColor: getThemeColor(getTheme().localNotifications.info.closeColor),
//     },
//   });
// };

export const showSuccess = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: 'green',
    textColor: 'white',
    action: {
      text: 'close',
      textColor: appColors.primary
    }
  });
};

export const showError = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: 'red',
    textColor: 'white',
    action: {
      text: 'close',
      textColor: appColors.primary
    }
  });
};