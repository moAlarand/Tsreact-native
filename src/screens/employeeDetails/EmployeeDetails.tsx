import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Employee} from '../../data/models/employee';
import {AppHeader} from '../../common';
import {EmployeeDetailsPreview} from '../../components/employees';

interface Props {
  employee: Employee;
}

export const EmployeeDetails: NavigationFunctionComponent<Props> = (props) => {
  const {componentId, employee} = props;

  return (
    <>
      <AppHeader componentId={componentId} title="details" />
      <EmployeeDetailsPreview employee={employee} />
    </>
  );
};
