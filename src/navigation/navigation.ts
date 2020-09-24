import { Navigation } from 'react-native-navigation';

//Navigate to home
export const navgateToHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home',
            },
          },
        ],
      },
    },
  });
};

//Navigate to auth
export const navgateToAuth = () => { };
