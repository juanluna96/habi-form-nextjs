import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import StepContainer from "../components/StepContainer";
import Summary from "@/components/steps/Summary";
import Step1 from "@/components/steps/Step1";
import Step5 from "@/components/steps/Step5";
import Step4 from "@/components/steps/Step4";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";

const steps = [
    {
      component: Step1,
      path: "datos-cliente",
      order: 1,
      description: "Nombre y apellidos",
    },
    {
      component: Step2,
      path: "correo",
      order: 2,
      description: "Correo",
    },
    {
      component: Step3,
      path: "direccion-apartamento",
      order: 3,
      description: "Dirección del apartamento",
    },
    {
      component: Step4,
      path: "numero-piso",
      order: 4,
      description: "Número de piso",
    },
    {
      component: Step5,
      path: "opciones",
      order: 5,
      description: "Opciones del apartamento",
    },
  ];
  

const StepPage: React.FC = () => {
  const router = useRouter();
  const { step } = router.query;

  const currentStep = steps.find((s) => s.path === step);
  const currentStepIndex = currentStep ? currentStep.order - 1 : 0;
  const totalSteps = steps.length;

  const handleStepChange = (nextStep: number) => {
    if (nextStep >= 0 && nextStep < totalSteps) {
      const nextPath = steps[nextStep].path;
      router.push(`/${nextPath}`);
    }
  };

  return (
    <Layout>
      <div>URL del paso actual: {step}</div>
      <div>
        Paso {currentStepIndex + 1} de {totalSteps}
      </div>
      <StepContainer
        currentStep={currentStepIndex}
        totalSteps={totalSteps}
        onStepChange={handleStepChange}
      />
      {currentStepIndex === totalSteps - 1 ? (
        <Summary />
      ) : (
        <div>Resumen del paso actual</div>
      )}
    </Layout>
  );
};

export default StepPage;
