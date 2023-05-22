import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setStep5Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";

const Step5 = ({ onPreviousStep, onNextStep }) => {
  const dispatch = useDispatch();
  const aparment_props = useSelector(
    (state: RootState) => state.form.apartment_props
  );

  const initialValues = {
    amenities: aparment_props,
  };

  const handleSubmit = (values) => {
    dispatch(setLoading(true));
    dispatch(setStep5Data({ apartment_props: values.amenities }));
    dispatch(setLoading(false));

    onNextStep();
  };

  return (
    <div>
      <h2>Paso 5: Opciones de Amenidades</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>
              <Field type="checkbox" name="amenities.bbq" />
              Zona BBQ
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="amenities.communalRoom" />
              Salón Comunal
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="amenities.playground" />
              Parque de Juegos
            </label>
          </div>
          <ErrorMessage name="amenities" component="div" />
          <button type="submit">Guardar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step5;
