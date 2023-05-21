import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import StepContainer from "../components/StepContainer";
import STEPS from "@/utils/StepsRoutes";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "@/redux/reducers/counterSlice";

const steps = STEPS;

const StepPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { step } = router.query;

  const currentStep = steps.find((s) => s.path === step);
  const currentStepIndex = currentStep ? currentStep.order - 1 : 0;
  const totalSteps = steps.length;

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(setCurrentStep(currentStep?.order));
  });

  const handleStepChange = (nextStep: number) => {
    if (nextStep >= 0 && nextStep < totalSteps) {
      const nextPath = steps[nextStep].path;
      router.push(`/${nextPath}`);
    }
  };

  return (
    <Layout>
      <div>URL del paso actual: {step}</div>
      <StepContainer
        currentStep={currentStepIndex}
        totalSteps={totalSteps}
        onStepChange={handleStepChange}
      />
    </Layout>
  );
};

export default StepPage;
