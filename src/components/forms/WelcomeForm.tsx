import { ContainerWelcome, Heading } from "@/assets/styles/welcome.style";
import steps from "@/utils/StepsRoutes";
import Image from "next/image";
import { useSelector } from "react-redux";

const STEPS = steps;

const WelcomeForm = () => {
  const currentStep = useSelector(
    (state: RootState) => state.counter.currentStep
  );

  return (
    <ContainerWelcome>
      <Image
        src="/images/logo.png"
        width={70}
        height={70}
        alt="Picture of the author"
      />
      {STEPS.length !== currentStep && (
        <Heading>
          Bienvenido a el formuario de registro de propiedad, porfavor completa
          todos los pasos para registrar la propiedad.
        </Heading>
      )}
    </ContainerWelcome>
  );
};

export default WelcomeForm;
