import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Employee} from '../data';
import {Navigation} from 'react-native-navigation';
import {
  styles as cStyles,
  AppImage,
  AppText,
  IconType,
  AppIconButton,
} from '../common';

interface Props {
  employee: Employee;
  onDelete: (employee: Employee) => void;
  onEdite: (employee: Employee) => void;
}

export const EmployeeCard: React.FC<Props> = (props: Props) => {
  const {employee, onDelete, onEdite} = props;
  const {age, name, img} = employee;

  return (
    <View style={styles.card}>
      <AppImage
        source={{uri: img}}
        height={50}
        style={{width: '100%'}}
        resizeMode="stretch"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          margin: 10,
        }}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <AppText>age: </AppText>
            <AppText>#{age}</AppText>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AppText>name: </AppText>
            <AppText>{name}</AppText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <AppIconButton
            onPress={() => {
              onEdite(employee);
            }}
            name="edit"
            type={IconType.entypo}
            size={15}
            color="gray"
          />
          <AppIconButton
            onPress={() => {
              onDelete(employee);
            }}
            name="delete"
            type={IconType.antDesign}
            size={15}
            color="red"
            style={{marginLeft: 10}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    height: 160,
    width: '100%',
    padding: 3,
    marginVertical: 5,
    ...cStyles.shadow,
  },
});
