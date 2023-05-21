import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { setStep1Data } from "@/redux/reducers/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/reducers/loaderSlicer";

const Step1: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const dispatch = useDispatch();
  const fullName = useSelector((state: RootState) => state.form.fullName);

  const initialValues = { fullName };

  const validateForm = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};

    if (!values.fullName) {
      errors.fullName = "Este campo es obligatorio";
    }

    return errors;
  };

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(setLoading(true));
    dispatch(setStep1Data({ fullName: values.fullName }));
    dispatch(setLoading(false));

    onNextStep();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="fullName">Nombre y apellidos:</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Guardando..." : "Guardar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
