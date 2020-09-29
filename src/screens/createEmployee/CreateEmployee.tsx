import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {AppHeader} from '../../common';
import {CreateEmployeeForm} from '../../components/employees';
import {Employee} from '../../data/models/employee';

interface formProps {
  employee?: Employee;
}

export const CreateEmployee: NavigationFunctionComponent<formProps> = ({
  componentId,
  employee,
}) => {
  return (
    <>
      <AppHeader componentId={componentId} title="New Employee" />
      <CreateEmployeeForm employee={employee} />
    </>
  );
};
