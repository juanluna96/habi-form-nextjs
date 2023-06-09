import React from "react";
import { Button } from "@/assets/styles/buttons.style";
import { setCurrentStep } from "@/redux/reducers/counterSlice";
import { resetForm } from "@/redux/reducers/formSlice";
import { RootState } from "@/redux/store";
import steps from "@/utils/StepsRoutes";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { IconContext } from "react-icons";
import {
  BsFillSaveFill,
  BsFillHouseDashFill,
  BsFillHouseCheckFill,
} from "react-icons/bs";
import {
  SummaryContainer,
  SummaryHeading,
  SummaryList,
  SummaryListItem,
  SummarySpan,
  SummaryText,
} from "@/assets/styles/summary.style";
import { useRouter } from "next/router";

interface SummaryProps {
  sideBar: boolean;
}

const SummaryForm: React.FC<SummaryProps> = ({ sideBar }) => {
  const router = useRouter();
  const STEPS = steps;
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const { fullName, email, address, floorNumber, apartment_props } = form;

  const onSubmitForm = () => {
    Swal.fire({
      icon: "success",
      title: "Gracias!",
      text: "Uno de nuestros acesores, revisara tu informacion y te contactara",
      iconColor: "#7c04fc",
      showConfirmButton: false,
      timer: 2500,
    }).then((result) => {
      dispatch(resetForm());
      dispatch(setCurrentStep(1));
      router.push(STEPS[0].path);
    });
  };

  const apartmentIcon = (state: boolean) => {
    const color = state ? "#27AE60" : "#C0392B";
    return (
      <IconContext.Provider value={{ color }}>
        {state ? (
          <BsFillHouseCheckFill size={20} />
        ) : (
          <BsFillHouseDashFill size={20} />
        )}
      </IconContext.Provider>
    );
  };

  return (
    <SummaryContainer>
      <SummaryHeading>Resumen</SummaryHeading>
      <SummaryText>
        Nombre y apellidos:{" "}
        <SummarySpan data-testid="fullName">{fullName}</SummarySpan>
      </SummaryText>
      <SummaryText>
        Correo electrónico:{" "}
        <SummarySpan data-testid="email">{email}</SummarySpan>
      </SummaryText>
      <SummaryText>
        Dirección del apartamento:{" "}
        <SummarySpan data-testid="address">{address}</SummarySpan>
      </SummaryText>
      <SummaryText>
        Número de piso:{" "}
        <SummarySpan data-testid="floorNumber">{floorNumber || ""}</SummarySpan>
      </SummaryText>
      <SummaryText>Opciones del apartamento:</SummaryText>
      <SummaryList>
        <SummaryListItem data-testid="bbq">
          {apartmentIcon(apartment_props.bbq)} Zona BBQ
        </SummaryListItem>
        <SummaryListItem data-testid="communalRoom">
          {apartmentIcon(apartment_props.communalRoom)} Salón comunal
        </SummaryListItem>
        <SummaryListItem data-testid="playground">
          {apartmentIcon(apartment_props.playground)} Parque de juegos
        </SummaryListItem>
      </SummaryList>

      {!sideBar && (
        <Button onClick={onSubmitForm}>
          {" "}
          <BsFillSaveFill
            size={18}
            style={{
              marginRight: 3,
            }}
          />{" "}
          Terminar formulario
        </Button>
      )}
    </SummaryContainer>
  );
};

export default SummaryForm;
