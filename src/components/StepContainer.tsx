import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";


const steps = [Step1, Step2, Step3, Step4, Step5];

interface StepContainerProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (nextStep: number) => void;
}

const StepContainer: React.FC<StepContainerProps> = ({
  currentStep,
  totalSteps,
  onStepChange,
}) => {
  const StepComponent = steps[currentStep];

  return (
    <div>
      <StepComponent />
      <button onClick={() => onStepChange(currentStep - 1)}>Anterior</button>
      <button onClick={() => onStepChange(currentStep + 1)}>Siguiente</button>
    </div>
  );
};

export default StepContainer;
