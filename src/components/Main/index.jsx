"use client"
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/slices";
import BreadCrumb from "@/components/common/BreadCrumb";
import { Container } from "reactstrap";
const store = configureStore({ reducer: rootReducer, devTools: true });
const { default: ProtectedLayout } = require("@/components/layouts/protected")

const MainComponent = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <ProtectedLayout>
                    <div className="page-content">
                        {children}
                    </div>
                </ProtectedLayout>
            </Provider>
        </>
    )
}

export default MainComponent