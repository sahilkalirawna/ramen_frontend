import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";

import rootReducer from "../reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["general", "leftmenudata"],
};

const middleware = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(pReducer, middleware);

// initialState,
const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { persistor, store };
