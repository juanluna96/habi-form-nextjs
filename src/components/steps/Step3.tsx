import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep3Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { BiSkipNextCircle } from "react-icons/bi";
import {
  FormGroup,
  Input,
  Label,
  StyledErrorMessage,
  SubmitButton,
} from "@/assets/styles/forms.style";

const Step3 = ({ onNextStep, onPreviousStep }) => {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.form.address);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required(
      "La dirección del apartamento es obligatoria"
    ),
  });

  const initialValues = { address };

  const handleSubmit = (values: { address: string }) => {
    dispatch(setLoading(true));
    dispatch(setStep3Data({ address: values.address }));
    dispatch(setLoading(false));

    onNextStep();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <Label htmlFor="address">Dirección del apartamento:</Label>
            <Field as={Input} type="text" id="address" name="address" />
            <StyledErrorMessage name="address" component="div" />
          </FormGroup>
          <SubmitButton type="submit">
            <BiSkipNextCircle size={20} style={{ marginRight: "2px" }} />
            Siguiente
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default Step3;
