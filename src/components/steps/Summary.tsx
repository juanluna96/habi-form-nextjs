import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "@/redux/reducers/formSlice";
import { useRouter } from "next/router";
import steps from "@/utils/StepsRoutes";
import { setCurrentStep } from "@/redux/reducers/counterSlice";

const Summary = () => {
  const STEPS = steps;
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useSelector((state: RootState) => state.form);
  const { fullName, email, address, floorNumber, apartment_props } = form;

  useEffect(() => {
    // Verifica si todos los valores del formulario están completos
    const valuesAreComplete = Object.values(form).every(Boolean);
    if (!valuesAreComplete) router.push("/");
  }, []);

  const onSubmitForm = () => {
    dispatch(resetForm());
    dispatch(setCurrentStep(1));

    router.push(STEPS[0].path);
  };

  return (
    <div>
      <h2>Resumen de datos</h2>
      <p>Nombre y apellidos: {fullName}</p>
      <p>Correo electrónico: {email}</p>
      <p>Dirección del apartamento: {address}</p>
      <p>Número de piso: {floorNumber}</p>
      <p>Opciones del apartamento:</p>
      <ul>
        {apartment_props.bbq && <li>Zona BBQ</li>}
        {apartment_props.communalRoom && <li>Salón comunal</li>}
        {apartment_props.playground && <li>Parque de juegos</li>}
      </ul>

      <button onClick={onSubmitForm}>Terminar formulario</button>
    </div>
  );
};

export default Summary;
