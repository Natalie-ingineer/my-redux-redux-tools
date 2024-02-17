import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localSlice";

// export const store = createStore(rootReducer, devToolsEnhancer());
export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});
