import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTermHandler(state, action) {
      state.searchTerm = action.payload;
    },
    addCarHandler(state, action) {
      // ??Assumption??
      // **Get car name and cost from action.payload => {name: 'abd', cost: 120, id: 1}**
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCarHandler(state, action) {
      // ??Assumption??
      // **Get car if from action.payload => car.id**
      // ! change updating the array approch
      const updatedCarsList = state.cars.filter(
        (car) => car.id !== action.payload
      );

      state.cars = updatedCarsList;
    },
  },
});
