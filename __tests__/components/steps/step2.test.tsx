import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Step2 from "@/components/steps/Step2";
import { setStep2Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import "@testing-library/jest-dom/extend-expect";

// Crea un mock del store utilizando redux-mock-store
const mockStore = configureStore([]);

describe("Step2", () => {
  it("should handle form submission", async () => {
    const store = mockStore({
      form: { email: "" },
      counter: { currentStep: 2 },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Step2 onNextStep={onNextStep} />
      </Provider>
    );

    const emailInput = getByLabelText("Correo electrónico:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    const expectedActions = [
      setLoading(true),
      setStep2Data({ email: "test@example.com" }),
      setLoading(false),
    ];

    // Espera a que se resuelvan todas las acciones asíncronas
    await waitFor(() => expect(store.getActions()).toEqual(expectedActions));

    expect(onNextStep).toHaveBeenCalledTimes(1);
  });

  it("should display error message for invalid email", async () => {
    const store = mockStore({
      form: { email: "" },
      counter: { currentStep: 2 },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText, queryByText } = render(
      <Provider store={store}>
        <Step2 onNextStep={onNextStep} />
      </Provider>
    );

    const emailInput = getByLabelText("Correo electrónico:");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    // Espera a que se resuelvan todas las acciones asíncronas
    await waitFor(() => {
      expect(store.getActions()).toEqual([]);
      const errorMessage = queryByText("Correo no valido");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
