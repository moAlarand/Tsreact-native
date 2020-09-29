import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Employee} from '../../data';
import {
  styles as cStyles,
  AppImage,
  AppText,
  IconType,
  AppIconButton,
  AppConfirmationModal,
} from '../../common';
import {RectButton} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {deleteEmployee} from './employeesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RooteStore} from '../../app/rooteReducer';

interface Props {
  employee: Employee;
  componentId: string;
}

export const EmployeeCard: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const deletingEmployeeId = useSelector(
    (state: RooteStore) => state.employees.deletingEmployeeId,
  );
  const {employee, componentId} = props;
  const {age, name, img, id} = employee;

  const _navigateToDetails = () => {
    Navigation.push(componentId, {
      component: {name: 'employee-details', passProps: {employee}},
    });
  };

  const _onEdite = () => {
    Navigation.push(componentId, {
      component: {name: 'create-employee', passProps: {employee}},
    });
  };

  const _onDelete = () => {
    if (id) {
      dispatch(deleteEmployee(id));
      setVisible(false);
    }
  };

  return (
    <>
      <RectButton onPress={_navigateToDetails} style={styles.card}>
        <AppImage
          source={{uri: img}}
          height={70}
          resizeMode="contain"
          style={{flex: 1}}
        />
        <View style={styles.body}>
          <View style={{flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              <AppText>age: </AppText>
              <AppText>#{age}</AppText>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <AppText>name: </AppText>
              <AppText>{name}</AppText>
            </View>
          </View>
          <View style={styles.actions}>
            <AppIconButton
              onPress={_onEdite}
              name="edit"
              type={IconType.entypo}
              size={15}
              color="gray"
            />
            <AppIconButton
              processing={deletingEmployeeId == id}
              onPress={() => {
                setVisible(true);
              }}
              name="delete"
              type={IconType.antDesign}
              size={15}
              color="red"
              style={{marginLeft: 12}}
            />
          </View>
        </View>
      </RectButton>
      <AppConfirmationModal
        isVisible={isVisible}
        title="Delete Employee"
        desc="do you wanna delete this employee?"
        onClose={() => setVisible(false)}
        onConfirm={_onDelete}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 160,
    width: '100%',
    padding: 3,
    marginVertical: 5,
    ...cStyles.shadow,
  },
  body: {
    justifyContent: 'center',
    flex: 2,
    margin: 20,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
