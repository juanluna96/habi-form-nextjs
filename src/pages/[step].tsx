import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import StepContainer from "../components/StepContainer";
import STEPS from "@/utils/StepsRoutes";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "@/redux/reducers/counterSlice";
import LeftPanel from "@/components/LeftPanel";
import { Container } from "@/assets/styles/sideBar.style";
import WelcomeForm from "@/components/forms/WelcomeForm";

const steps = STEPS;

const StepPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { step } = router.query;

  const currentStep = steps.find((s) => s.path === step);
  const totalSteps = steps.length;

  useEffect(() => {
    if (!router.isReady) return;
    if (!currentStep) {
      router.push("/404");
      return;
    }
    dispatch(setCurrentStep(currentStep?.order));
  });

  return (
    <Layout error={false}>
      <WelcomeForm />
      <Container>
        <StepContainer />
        {totalSteps !== currentStep?.order && <LeftPanel />}
      </Container>
    </Layout>
  );
};

export default StepPage;
