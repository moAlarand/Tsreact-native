import React, {useEffect} from 'react';
import {EmployeeCard} from './EmployeeCard';
import {AppIndicator, AppList, showError} from '../../common';
import {Employee} from '../../data';
import {fetchAllEmployees} from './employeesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RooteStore} from '../../app/rooteReducer';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';

interface Props {
  componentId: string;
}
export const EmployeeList: React.FC<Props> = ({componentId}) => {
  const dispatch = useDispatch();
  const {error, data, loading} = useSelector(
    (state: RooteStore) => state.employees,
  );

  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);

  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error]);

  return loading ? (
    <View style={{flex: 1, padding: 10}}>
      <AppIndicator />
    </View>
  ) : (
    <AppList<Employee>
      style={{flex: 1}}
      contentContainerStyle={{
        padding: 10,
      }}
      data={data}
      renderItem={({item}) => (
        <EmployeeCard componentId={componentId} employee={item} />
      )}
    />
  );
};
