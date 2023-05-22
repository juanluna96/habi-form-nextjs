import { Stepper, Step } from "react-form-stepper";

const styleConfig = {
  activeBgColor: "#8808ff",
  activeTextColor: "#ffffff",
  completedBgColor: "#9C31FF",
  completedTextColor: "#ffffff",
  inactiveBgColor: "#e0e0e0",
  inactiveTextColor: "#ffffff",
  size: "2em",
  circleFontSize: "1.3rem",
  labelFontSize: "0.875rem",
  borderRadius: "50%",
  fontWeight: "400",
};

const connectorStyleConfig = {
  disabledColor: "#bdbdbd",
  activeColor: "#8808ff",
  completedColor: "#9C31FF",
  size: 1.5,
  stepSize: "2em",
  style: "solid",
};

const StepperLine = ({ steps, currentStep, totalSteps }) => {
  return (
    <Stepper
      activeStep={currentStep - 1}
      styleConfig={styleConfig}
      connectorStyleConfig={connectorStyleConfig}
      className="step-container"
    >
      {steps.map(
        (step) =>
          step.order <= totalSteps && (
            <Step label={step.description} key={step.order} />
          )
      )}
    </Stepper>
  );
};

export default StepperLine;
