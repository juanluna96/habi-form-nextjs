import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setStep4Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";

const Step4 = ({ onPreviousStep, onNextStep }) => {
  const dispatch = useDispatch();
  const floorNumber = useSelector((state: RootState) => state.form.floorNumber);

  const initialValues = { floorNumber };

  const validationSchema = Yup.object({
    floorNumber: Yup.number()
      .typeError("Debe ser un número")
      .integer("Debe ser un número entero")
      .min(1, "El número mínimo de piso es 1")
      .max(50, "El número máximo de piso es 50")
      .required("Campo obligatorio"),
  });

  const handleSubmit = (values) => {
    dispatch(setLoading(true));
    dispatch(setStep4Data({ floorNumber: values.floorNumber }));
    dispatch(setLoading(false));

    onNextStep();
  };

  return (
    <div>
      <h2>Step 4: Número de piso</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="floorNumber">Número de piso:</label>
            <Field type="number" id="floorNumber" name="floorNumber" />
            <ErrorMessage name="floorNumber" component="div" />
          </div>

          <button type="submit">Guardar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step4;
