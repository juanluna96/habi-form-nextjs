import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { setStep1Data } from "@/redux/reducers/formSlice";
import Step1 from "@/components/steps/Step1";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";

describe("Step1", () => {
  const store = configureStore([]);

  const mockStore = store({
    form: { fullName: "" },
    counter: { currentStep: 1 },
    loader: { loading: false },
  });

  it("should render the component", () => {
    render(
      <Provider store={mockStore}>
        <Step1 onNextStep={() => {}} />
      </Provider>
    );
  });

  it("should dispatch the correct action on form submission", async () => {
    const onNextStepMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <Provider store={mockStore}>
        <Step1 onNextStep={onNextStepMock} />
      </Provider>
    );

    const fullNameInput = getByLabelText("Nombre y apellidos:");
    const submitButton = getByText("Siguiente");

    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.click(submitButton);

    // Espera a que se resuelva la acción dispatch y realiza las aserciones necesarias
    await waitFor(() => {
      expect(mockStore.getActions()).toContainEqual(
        setStep1Data({ fullName: "John Doe" })
      );
      expect(onNextStepMock).toHaveBeenCalled();
    });
  });

  it("should display validation error when form is submitted with empty name", async () => {
    const onNextStepMock = jest.fn();

    const { getByText, findByText } = render(
      <Provider store={mockStore}>
        <Step1 onNextStep={onNextStepMock} />
      </Provider>
    );

    const submitButton = getByText("Siguiente");

    fireEvent.click(submitButton);

    // Espera a que se muestre el mensaje de error y realiza las aserciones necesarias
    const errorMessage = await findByText("Este campo es obligatorio");
    expect(errorMessage).toBeInTheDocument();
    expect(onNextStepMock).not.toHaveBeenCalled();
  });
});
