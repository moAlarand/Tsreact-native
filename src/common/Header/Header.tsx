import React, {ReactElement} from 'react';
import {
  FlexStyle,
  SafeAreaView,
  StyleSheet,
  TextStyle,
  View,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  AppText,
  AppIconButton,
  IconType,
  APPBAR_HEIGHT,
  styles as cStyles,
} from '..';

interface Props {
  title?: string;
  hideBack?: boolean;
  flat?: boolean;
  rightItem?: ReactElement;
  componentId: string;
}

export const AppHeader = (props: Props) => {
  const {componentId, title, hideBack, rightItem, flat} = props;

  return (
    <SafeAreaView style={!flat && cStyles.barShadow}>
      <View style={[styles.container]}>
        <View style={[{justifyContent: 'flex-start'}, styles.items]}>
          {!hideBack && (
            <AppIconButton
              onPress={() => Navigation.pop(componentId)}
              name={Platform.OS ? 'arrow-back-ios' : 'arrow-back'}
              type={IconType.materialIcons}
              size={25}
              color="gray"
              style={{marginLeft: 10}}
            />
          )}
        </View>
        <View style={[{justifyContent: 'center'}, styles.items]}>
          <AppText style={{flex: 1, textAlign: 'center', fontSize: 17}}>
            {title}
          </AppText>
        </View>
        <View style={[{justifyContent: 'flex-end'}, styles.items]}>
          {rightItem}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
});
