import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Step5 from "@/components/steps/Step5";
import { setStep5Data } from "@/redux/reducers/formSlice";
import { setLoading } from "@/redux/reducers/loaderSlicer";

// Crea un mock del store utilizando redux-mock-store
const mockStore = configureStore([]);

describe("Step5", () => {
  it("should handle form submission", async () => {
    const store = mockStore({
      form: { apartment_props: {} },
      loader: { loading: false },
    });

    const onNextStep = jest.fn();

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Step5 onNextStep={onNextStep} />
      </Provider>
    );

    const bbqCheckbox = getByLabelText("Zona BBQ");
    fireEvent.click(bbqCheckbox);

    const submitButton = getByText("Siguiente");
    fireEvent.click(submitButton);

    const expectedActions = [
      setLoading(true),
      setStep5Data({ apartment_props: { bbq: true } }),
      setLoading(false),
    ];

    // Espera a que se resuelvan todas las acciones asíncronas
    await waitFor(() => expect(store.getActions()).toEqual(expectedActions));

    expect(onNextStep).toHaveBeenCalledTimes(1);
  });
});
