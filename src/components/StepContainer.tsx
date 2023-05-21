import React, { useState } from "react";
import STEPS from "@/utils/StepsRoutes";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCurrentStep } from "@/redux/reducers/counterSlice";

const steps = STEPS;

// Importar otros componentes de pasos

const StepContainer: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state: RootState) => state.counter.currentStep
  );
  const totalSteps = steps.length - 1;
  const router = useRouter();

  const handleNextStep = () => {
    dispatch(setCurrentStep(currentStep + 1));
    router.push(`/${steps[currentStep].path}`);
  };

  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
    router.push(`/${steps[currentStep - 1].path}`);
  };

  const renderCurrentStep = () => {
    const {
      component: StepComponent,
      buttons: { back, next },
    } = steps[currentStep - 1];

    return (
      <StepComponent
        onNextStep={next && handleNextStep}
        onPreviousStep={back && handlePreviousStep}
      />
    );
  };

  return (
    <div>
      {currentStep <= totalSteps && (
        <div>
          Step {currentStep} of {totalSteps}
        </div>
      )}

      {renderCurrentStep()}
      {currentStep > 1 && <button onClick={handlePreviousStep}>Atrás</button>}
    </div>
  );
};

export default StepContainer;
