import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep3Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";

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
      <h1>Paso 3: Dirección del apartamento</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="address">Dirección del apartamento:</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <button type="submit">Guardar</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Step3;
