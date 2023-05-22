import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "@/redux/reducers/formSlice";
import { useRouter } from "next/router";
import SummaryForm from "../forms/SummaryForm";

const Summary = () => {
  const router = useRouter();
  const form = useSelector((state: RootState) => state.form);

  useEffect(() => {
    // Verifica si todos los valores del formulario están completos
    const valuesAreComplete = Object.values(form).every(Boolean);
    if (!valuesAreComplete) router.push("/");
  }, []);

  return <SummaryForm sideBar={false} />;
};

export default Summary;
