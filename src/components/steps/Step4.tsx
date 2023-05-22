import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setStep4Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { BiSkipNextCircle } from "react-icons/bi";
import {
  FormGroup,
  Input,
  Label,
  StyledErrorMessage,
  SubmitButton,
} from "@/assets/styles/forms.style";
interface StepProps {
  onNextStep: () => void;
}

const Step4: React.FC<StepProps> = ({ onNextStep }) => {
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

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(setLoading(true));
    dispatch(setStep4Data({ floorNumber: values.floorNumber }));
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
            <Label htmlFor="floorNumber">Número de piso:</Label>
            <Field
              as={Input}
              type="number"
              id="floorNumber"
              name="floorNumber"
            />
            <StyledErrorMessage name="floorNumber" component="div" />
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

export default Step4;
