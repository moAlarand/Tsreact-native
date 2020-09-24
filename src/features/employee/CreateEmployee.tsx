import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppImgPicker} from '../../common/imgPicker/ImgPicker';
import {
  AppText,
  AppImage,
  styles as cStyles,
  AppInput,
  appColors,
  AppButton,
} from '../../common';

export const CreateEmployeeForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText style={{padding: 5}}>Pick Image</AppText>
      <AppImgPicker
        title="Pick Image"
        style={styles.img}
        height={50}
        placeholderImg={require('../../assets/img/placeholderImg.png')}
      />
      <AppInput placeholder="name" style={styles.input} />
      <AppInput placeholder="age" style={styles.input} />
      <AppButton
        style={{marginVertical: 20, marginHorizontal: 5}}
        title="create"
      />
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
  input: {
    alignSelf: 'stretch',
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: appColors.primary,
  },
});
