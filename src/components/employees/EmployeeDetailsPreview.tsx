import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Employee} from '../../data/models/employee';
import {AppImage} from '../../common/image/Image';
import {AppText, styles as cStyles} from '../../common';

interface Props {
  employee: Employee;
}

export const EmployeeDetailsPreview: React.FC<Props> = (props) => {
  const {employee} = props;
  const {img, name, age, id} = employee;

  return (
    <View style={styles.container}>
      <AppImage
        source={{uri: img}}
        style={styles.img}
        height={100}
        resizeMode="contain"
      />
      <AppText size={17} style={styles.text}>
        name: {name}
      </AppText>
      <AppText size={17} style={styles.text}>
        age: {age}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    ...cStyles.shadow,
  },
  img: {
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'stretch',
    marginTop: 6,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});
