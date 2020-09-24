import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

export interface Screen {
  name: string;
  component: NavigationFunctionComponent;
  contextProvider?: React.FC;
}

// create Screen
export const createScreen = (screen: Screen) => {
  const {name, component: Component, contextProvider: ContextProvider} = screen;

  let ScreenWraper: NavigationFunctionComponent;

  if (ContextProvider) {
    ScreenWraper = (props) => (
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>
    );
  } else {
    ScreenWraper = Component;
  }

  Navigation.registerComponent(name, () => gestureHandlerRootHOC(ScreenWraper));
};
