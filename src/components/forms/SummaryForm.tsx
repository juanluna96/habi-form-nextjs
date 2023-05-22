import { setCurrentStep } from "@/redux/reducers/counterSlice";
import { resetForm } from "@/redux/reducers/formSlice";
import { RootState } from "@/redux/store";
import steps from "@/utils/StepsRoutes";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const SummaryForm = ({ sideBar }) => {
  const STEPS = steps;
  //   const router = useRouter();
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  const { fullName, email, address, floorNumber, apartment_props } = form;

  const onSubmitForm = () => {
    dispatch(resetForm());
    dispatch(setCurrentStep(1));

    // router.push(STEPS[0].path);
  };

  return (
    <div>
      <h2>Resumen</h2>
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

      {!sideBar && <button onClick={onSubmitForm}>Terminar formulario</button>}
    </div>
  );
};

export default SummaryForm;
