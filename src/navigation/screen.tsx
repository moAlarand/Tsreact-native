import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../app/store';
export interface Screen {
  name: string;
  component: NavigationFunctionComponent<any>;
  contextProvider?: React.FC;
}

// create Screen
export const createScreen = (screen: Screen) => {
  const {name, component: Component, contextProvider: ContextProvider} = screen;

  let ScreenWraper: NavigationFunctionComponent;

  if (ContextProvider) {
    ScreenWraper = (props) => (
      <Provider store={store}>
        <ContextProvider>
          <Component {...props} />
        </ContextProvider>
      </Provider>
    );
  } else {
    ScreenWraper = (props) => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  }

  Navigation.registerComponent(name, () => gestureHandlerRootHOC(ScreenWraper));
};
