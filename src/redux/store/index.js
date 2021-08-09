import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["general"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(pReducer, middleware);

// initialState,
const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { persistor, store };
