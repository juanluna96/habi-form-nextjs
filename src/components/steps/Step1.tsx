import React from "react";
import { Formik, Form, Field } from "formik";
import { setStep1Data } from "@/redux/reducers/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { BiSkipNextCircle } from "react-icons/bi";
import {
  FormGroup,
  Input,
  Label,
  StyledErrorMessage,
  SubmitButton,
} from "@/assets/styles/forms.style";

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
          <FormGroup>
            <Label htmlFor="fullName">Nombre y apellidos:</Label>
            <Field as={Input} type="text" id="fullName" name="fullName" />
            <StyledErrorMessage name="fullName" component="div" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            <BiSkipNextCircle size={20} style={{ marginRight: "2px" }} />
            Siguiente
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
