import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Step4 from "@/components/steps/Step4";
import { setStep4Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import "@testing-library/jest-dom/extend-expect";

// Crea un mock del store utilizando redux-mock-store
const mockStore = configureStore([]);

describe("Step4", () => {
  it("should handle form submission", async () => {
    const store = mockStore({
      form: { floorNumber: "" },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Step4 onNextStep={onNextStep} />
      </Provider>
    );

    const floorNumberInput = getByLabelText("Número de piso:");
    fireEvent.change(floorNumberInput, { target: { value: "5" } });

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    const expectedActions = [
      setLoading(true),
      setStep4Data({ floorNumber: 5 }),
      setLoading(false),
    ];

    // Espera a que se resuelvan todas las acciones asíncronas
    await waitFor(() => expect(store.getActions()).toEqual(expectedActions));

    expect(onNextStep).toHaveBeenCalledTimes(1);
  });

  it("should display validation error when floor number is invalid", async () => {
    const store = mockStore({
      form: { floorNumber: "" },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText, queryByText } = render(
      <Provider store={store}>
        <Step4 onNextStep={onNextStep} />
      </Provider>
    );

    const floorNumberInput = getByLabelText("Número de piso:");
    fireEvent.change(floorNumberInput, { target: { value: "0" } });

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(queryByText("El número mínimo de piso es 1")).toBeInTheDocument()
    );

    expect(onNextStep).not.toHaveBeenCalled();
  });
});
