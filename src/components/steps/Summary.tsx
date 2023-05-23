import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import SummaryForm from "../forms/SummaryForm";

const Summary = () => {
  const router = useRouter();
  const form = useSelector((state: RootState) => state.form);

  useEffect(() => {
    const valuesAreComplete = Object.values(form).every(Boolean);
    if (!valuesAreComplete) router.push("/");
  }, []);

  return <SummaryForm sideBar={false} />;
};

export default Summary;
