import React, {useCallback, useEffect} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {Employee} from '../../data';
import * as yup from 'yup';
import {creatorEditEmployee, reset} from './employeesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RooteStore} from '../../app/rooteReducer';
import {showSuccess} from '../../common';
import {EmployeeFormBody} from './EmployeeFormBody';
import {Keyboard} from 'react-native';

interface formProps {
  employee?: Employee;
}

export const CreateEmployeeForm: React.FC<formProps> = (props) => {
  const {employee} = props;
  console.log('>>>>>>cc', employee);

  const {success, error} = useSelector((state: RooteStore) => state.employees);
  const initialValues: Employee = {name: '', age: null, img: '', ...employee};
  const dispatch = useDispatch();
  const validateYupSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    img: yup.string().required(),
  });

  const _onSumbit = useCallback(
    (values: Employee, formikHandlers: FormikHelpers<Employee>) => {
      Keyboard.dismiss();
      dispatch(creatorEditEmployee(values, formikHandlers));
    },
    [dispatch],
  );

  useEffect(() => {
    if (success) {
      showSuccess('success');
    }
    return () => {
      dispatch(reset());
    };
  }, [success]);

  return (
    <Formik
      validationSchema={validateYupSchema}
      initialValues={initialValues}
      onSubmit={_onSumbit}>
      {(props) => <EmployeeFormBody {...props} />}
    </Formik>
  );
};
