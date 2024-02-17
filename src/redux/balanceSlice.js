import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    value: 50,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const persistBalanceConfig = {
  key: "balance",
  storage,
  whiteList: ["value"],
};

export const balanceReducer = persistReducer(
  persistBalanceConfig,
  balanceSlice.reducer
);

// export const balanceReducer = balanceSlice.reducer;

// const initialState = {
//   value: 50,
// };

// export const deposit = (value) => {
//   return {
//     type: ,
//     payload: value,
//   };
// };

// export const deposit = createAction("balance/deposit");
//  deposit(25);

// export const withdraw = createAction("balance/withdraw");

// -------------------------------------
// {type: 'balance/withdraw', payload: {…}}
// export const withdraw = createAction("balance/withdraw", (x) => {
//   return {
//     payload: {
//       value: x,
//     },
//   };
// });
// ----------------------------------------
// export const withdraw = (value) => {
//   return {
//     type: ,
//     payload: value,
//   };
// };

// export const balanceReducer = createReducer(initialState, (builder) =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     })
// );

// export const balanceReducer = (state = balanceInitialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };
