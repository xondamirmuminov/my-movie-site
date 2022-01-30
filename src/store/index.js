import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loadingReducer from "./reducers/loading";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loading"],
};

const rootReducers = combineReducers({
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store as default, persistor };
