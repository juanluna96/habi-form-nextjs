import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  currentStep: number;
}

const initialState: CounterState = {
  currentStep: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    }
  },
});

export const { setCurrentStep } = counterSlice.actions;

export default counterSlice.reducer;
