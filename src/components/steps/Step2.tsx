import React from "react";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep2Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { BiSkipNextCircle } from "react-icons/bi";
import {
  FormGroup,
  Input,
  Label,
  StyledErrorMessage,
  SubmitButton,
} from "@/assets/styles/forms.style";

const Step2 = ({ onNextStep, onPreviousStep }) => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.form.email);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo no valido")
      .required("El correo es obligatorio"),
  });

  const initialValues = { email };

  const handleSubmit = (values) => {
    dispatch(setLoading(true));
    dispatch(setStep2Data({ email: values.email }));
    dispatch(setLoading(false));
    onNextStep();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <Label htmlFor="email">Correo electrónico:</Label>
            <Field as={Input} type="text" id="email" name="email" />
            <StyledErrorMessage name="email" component="div" />
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

export default Step2;
