import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep2Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";

const Step2 = ({ onNextStep, onPreviousStep }) => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.form.email);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setLoading(true));
      dispatch(setStep2Data({ email: values.email }));
      dispatch(setLoading(false));
      onNextStep();
    },
  });

  return (
    <div>
      <h2>Step 2: Email</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <button type="submit">Guardar y continuar</button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
