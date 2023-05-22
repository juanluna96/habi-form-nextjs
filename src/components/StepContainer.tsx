import React from "react";
import STEPS from "@/utils/StepsRoutes";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setCurrentStep } from "@/redux/reducers/counterSlice";
import StepperLine from "./steps/StepperLine";
import { ContainerSteps } from "@/assets/styles/formCard.style";
import { AiOutlineBackward } from "react-icons/ai";
import { CircleButton } from "@/assets/styles/buttons.style";

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
    router.back();
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
    <ContainerSteps>
      {currentStep > 1 && (
        <CircleButton onClick={handlePreviousStep}>
          <AiOutlineBackward />
        </CircleButton>
      )}
      {currentStep <= totalSteps && (
        <div>
          <StepperLine
            {...{
              currentStep,
              steps,
              totalSteps,
            }}
          />
          <h2>
            Paso {currentStep}: {steps[currentStep - 1].description}
          </h2>
        </div>
      )}

      {renderCurrentStep()}
    </ContainerSteps>
  );
};

export default StepContainer;
