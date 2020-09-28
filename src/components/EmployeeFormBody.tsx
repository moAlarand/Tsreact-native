import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppImgPicker} from '../common/imgPicker/ImgPicker';
import {
  AppText,
  styles as cStyles,
  AppInput,
  appColors,
  AppButton,
} from '../common';
import {FormikProps} from 'formik';
import {Employee} from '../data';

export const EmployeeFormBody: React.FC<FormikProps<Employee>> = (props) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <View style={styles.container}>
      <AppText style={{padding: 5}}>Pick Image</AppText>
      <AppImgPicker
        source={
          values.img
            ? {uri: values.img}
            : require('../assets/img/placeholderImg.png')
        }
        onPick={(img) => setFieldValue('img', img)}
        title="Pick Image"
        style={styles.img}
        height={50}
      />
      <AppText size={10} style={{color: 'red', marginHorizontal: 10}}>
        {touched.img && errors.img}
      </AppText>
      <AppInput
        value={values.name}
        onBlur={handleBlur('name')}
        onChangeText={handleChange('name')}
        placeholder="name"
        error={touched.name ? errors.name : ''}
        style={styles.input}
        errorStyle={styles.error}
      />
      <AppInput
        value={values.age ? `${values.age}` : ''}
        onBlur={handleBlur('age')}
        onChangeText={handleChange('age')}
        placeholder="age"
        keyboardType="numeric"
        error={touched.age ? errors.age : ''}
        style={styles.input}
        errorStyle={styles.error}
      />
      <AppButton
        processing={isSubmitting}
        onPress={handleSubmit}
        style={{marginVertical: 20, marginHorizontal: 5}}
        title={values.id ? 'edit' : 'create'}
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
  error: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
});
