import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SummaryForm from "@/components/forms/SummaryForm";
import { setCurrentStep } from "@/redux/reducers/counterSlice";
import { resetForm } from "@/redux/reducers/formSlice";
import { useRouter } from "next/router";
import "@testing-library/jest-dom/extend-expect";
import Swal from "sweetalert2";

// Crea un mock del store utilizando redux-mock-store
const mockStore = configureStore([]);

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(() => Promise.resolve({})),
}));

describe("SummaryForm", () => {
  it("should handle form submission", async () => {
    const store = mockStore({
      form: {
        fullName: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St",
        floorNumber: 5,
        apartment_props: {
          bbq: true,
          communalRoom: false,
          playground: true,
        },
      },
    });

    const dispatch = jest.fn();
    const pushMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    const { getByText } = render(
      <Provider store={store}>
        <SummaryForm sideBar={false} />
      </Provider>
    );

    const submitButton = getByText("Terminar formulario");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        icon: "success",
        title: "Gracias!",
        text: "Uno de nuestros acesores, revisara tu informacion y te contactara",
        iconColor: "#7c04fc",
        showConfirmButton: false,
        timer: 2500,
      });
    });
  });

  it("should display form data from the store", () => {
    const store = mockStore({
      form: {
        fullName: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St",
        floorNumber: 5,
        apartment_props: {
          bbq: true,
          communalRoom: false,
          playground: true,
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <SummaryForm sideBar={false} />
      </Provider>
    );

    expect(getByTestId("fullName")).toHaveTextContent("John Doe");
    expect(getByTestId("email")).toHaveTextContent("johndoe@example.com");
    expect(getByTestId("address")).toHaveTextContent("123 Main St");
    expect(getByTestId("floorNumber")).toHaveTextContent("5");
    expect(getByTestId("bbq")).toHaveTextContent("Zona BBQ");
    expect(getByTestId("communalRoom")).toHaveTextContent("Salón comunal");
    expect(getByTestId("playground")).toHaveTextContent("Parque de juegos");
  });
});
