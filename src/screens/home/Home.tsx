import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {IconType, AppHeader} from '../../common';
import {appColors} from '../../common/Theme/colors';
import {AppIconButton} from '../../common/iconButton/IconButton';
import {EmployeeList} from '../../features/employee/EmployeesList';

export const Home: NavigationFunctionComponent = ({componentId}) => {
  return (
    <>
      <AppHeader
        title="Home"
        componentId={componentId}
        rightItem={
          <AppIconButton
            onPress={() =>
              Navigation.push(componentId, {
                component: {name: 'create-employee'},
              })
            }
            name="plus"
            type={IconType.entypo}
            size={25}
            color={appColors.primary}
          />
        }
      />
      <EmployeeList />
      <SafeAreaView />
    </>
  );
};
