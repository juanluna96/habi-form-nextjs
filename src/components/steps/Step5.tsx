import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setStep5Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { CheckboxInput, FormGroup } from "@/assets/styles/forms.style";
import { StyledErrorMessage } from "@/assets/styles/forms.style";
import { CheckboxContainer } from "@/assets/styles/forms.style";
import { CheckboxLabel } from "@/assets/styles/forms.style";
import { SubmitButton } from "@/assets/styles/forms.style";
import { BiSkipNextCircle } from "react-icons/bi";
interface StepProps {
  onNextStep: boolean | (() => void);
}

const Step5: React.FC<StepProps> = ({ onNextStep }) => {
  const dispatch = useDispatch();
  const aparment_props = useSelector(
    (state: RootState) => state.form.apartment_props
  );

  const initialValues = {
    amenities: aparment_props,
  };

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(setLoading(true));
    dispatch(setStep5Data({ apartment_props: values.amenities }));
    dispatch(setLoading(false));

    if (typeof onNextStep === "function") {
      onNextStep();
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <CheckboxContainer>
            <CheckboxLabel>
              <Field as={CheckboxInput} type="checkbox" name="amenities.bbq" />
              Zona BBQ
            </CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <CheckboxLabel>
              <Field
                as={CheckboxInput}
                type="checkbox"
                name="amenities.communalRoom"
              />
              Salón Comunal
            </CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <CheckboxLabel>
              <Field
                as={CheckboxInput}
                type="checkbox"
                name="amenities.playground"
              />
              Parque de Juegos
            </CheckboxLabel>
          </CheckboxContainer>
          <StyledErrorMessage name="amenities" component="div" />
          <SubmitButton type="submit">
            <BiSkipNextCircle size={20} style={{ marginRight: "2px" }} />
            Siguiente
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default Step5;
