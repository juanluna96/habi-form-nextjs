import React from "react";
import { Button } from "@/assets/styles/buttons.style";
import { ContainerWelcome, Heading } from "@/assets/styles/welcome.style";
import Layout from "@/components/Layout";
import { setCurrentStep } from "@/redux/reducers/counterSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const NotFoundPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goBackHome = () => {
    dispatch(setCurrentStep(1));
    router.push("/");
  };

  return (
    <>
      <Layout error={true}>
        <ContainerWelcome>
          <Image
            src="/images/logo.png"
            width={70}
            height={70}
            alt="Picture of the author"
          />
          <Heading>
            Ops, parece que no pudimos encontrar la pagina que buscabas, prueba
            en otro momento.
          </Heading>
        </ContainerWelcome>
        <Button onClick={goBackHome}>¿Te gustaria volver a el inicio?</Button>
      </Layout>
    </>
  );
};

export default NotFoundPage;
