import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Step3 from "@/components/steps/Step3";
import { setStep3Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";
import { RootState } from "@/redux/store";

// Crea un mock del store utilizando redux-mock-store
const mockStore = configureStore<RootState>([]);

describe("Step3", () => {
  it("should handle form submission", async () => {
    const store = mockStore({
      form: { address: "" },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Step3 onNextStep={onNextStep} />
      </Provider>
    );

    const addressInput = getByLabelText("Dirección del apartamento:");
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    const expectedActions = [
      setLoading(true),
      setStep3Data({ address: "123 Main St" }),
      setLoading(false),
    ];

    // Espera a que se resuelvan todas las acciones asíncronas
    await waitFor(() => expect(store.getActions()).toEqual(expectedActions));

    expect(onNextStep).toHaveBeenCalledTimes(1);
  });
});
