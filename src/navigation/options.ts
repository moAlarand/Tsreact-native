import { Options, OptionsModalPresentationStyle, Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import { appColors } from "../common";

export const defaultNavOptions: Options = {
  statusBar: {
    visible: true,
    style: Platform.Version > 23 ? 'dark' : 'light',
    backgroundColor: Platform.Version > 23 ? 'white' : appColors.statusBar,
  },
  topBar: {
    drawBehind: true,
    visible: false,
    animate: false,
  },
  animations: {
    push: {
      waitForRender: false,
    },
    showModal: {
      waitForRender: false,
    },
  },
  modalPresentationStyle: OptionsModalPresentationStyle.currentContext,
  bottomTabs: {
    drawBehind: true,
    visible: false,
    animate: false,
    // tabsAttachMode: 'onSwitchToTab',
  },
};


export const setDefaultOptions = (locale: 'ar' | 'en' = 'en', options: Options = {}) => {
  Navigation.setDefaultOptions({
    ...defaultNavOptions,
    ...options,
    layout: {
      direction: locale == 'ar' ? 'rtl' : 'ltr',
      backgroundColor: 'white',
      orientation: ['portrait'],
    },
  });
}