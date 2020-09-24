import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {AppHeader} from '../../common';
import {CreateEmployeeForm} from '../../features/employee/CreateEmployee';

export const createEmployee: NavigationFunctionComponent = ({componentId}) => {
  return (
    <>
      <AppHeader componentId={componentId} title="New Employee" />
      <CreateEmployeeForm />
    </>
  );
};
