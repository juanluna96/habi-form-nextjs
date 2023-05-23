import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApartmentProps {
  bbq: boolean;
  communalRoom: boolean;
  playground: boolean;
}

interface FormState {
  fullName: string;
  email: string;
  address: string;
  floorNumber: number;
  apartment_props: ApartmentProps
}

const initialState: FormState = {
  fullName: "",
  email: "",
  address: "",
  floorNumber: 0,
  apartment_props: {
    bbq: false,
    communalRoom: false,
    playground: false
  }
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<{ fullName: string }>) => {
      state.fullName = action.payload.fullName;
    },
    setStep2Data: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setStep3Data: (state, action: PayloadAction<{ address: string }>) => {
      state.address = action.payload.address;
    },
    setStep4Data: (state, action: PayloadAction<{ floorNumber: number }>) => {
      state.floorNumber = action.payload.floorNumber;
    },
    setStep5Data: (state, action: PayloadAction<{ apartment_props: ApartmentProps }>) => {
      state.apartment_props = action.payload.apartment_props;
    },
    resetForm: () => initialState
  },
});

export const { setStep1Data, setStep2Data, setStep3Data, setStep4Data, setStep5Data, resetForm } = formSlice.actions;

export default formSlice.reducer;
