import React from 'react';
import * as yup from 'yup'
import {useFormik} from 'formik';

type Props = {
  initialValues: any;
  actions: {
    resolve: () => any;
    reject: () => any;
  };
  fieldComponents: JSX.Element
}

const FormikForm: React.FC<Props> = ({initialValues, actions, fieldComponents}) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: actions.resolve,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      {fieldComponents}
    </form>
  );
}

export default FormikForm;

