// import { combineReducers } from "redux";
// import storage from 'redux-persist/lib/storage'; 
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';

// // Reducers
// import LayoutReducer from "./layouts/reducer";
// import LoginReducer from "./auth/login/reducer";

// const rootReducer = combineReducers({
//     Layout: LayoutReducer,
//     Login: LoginReducer
  
// });

// const persistConfig = {
//     key: "root", // Key for the persisted state in storage
//     storage, // Storage engine (e.g., localStorage)
//     // whitelist: ["Login"], // Only 'Login' reducer will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { persistor, store };

// slices/index.js or store.js (choose one filename)

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import LayoutReducer from "./layouts/reducer";
import LoginReducer from "./auth/login/reducer";

// Combine reducers into rootReducer
const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer
});

// Persist configuration
const persistConfig = {
    key: "root",       // Key for the persisted state in storage
    storage,           // Storage engine (localStorage in this case)
    whitelist: ["Login"] // Only 'Login' slice will be persisted
};

// Apply persist configuration to rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with middleware adjustments for redux-persist actions
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist actions to avoid warnings
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "persist/PURGE"]
            }
        })
});

// Export persistor and store for use in the app
const persistor = persistStore(store);

export { store, persistor };

