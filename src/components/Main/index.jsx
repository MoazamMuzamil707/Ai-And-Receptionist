"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/slices";
import ProtectedLayout from "@/components/layouts/protected";
import Loader from "../common/Loader";

const MainComponent = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time or wait for any required setup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100); // Adjust timeout as needed
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {loading ? (
          <Loader /> // Show loader if loading is true
        ) : (
          <ProtectedLayout>
            <div className="page-content">{children}</div>
          </ProtectedLayout>
        )}
      </PersistGate>
    </Provider>
  );
};

export default MainComponent;
