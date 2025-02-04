"use client";
import NoAuthPagesLayout from "@/components/layouts/noAuth";
import LoginFormSection from "@/components/login/loginFormSection";
import LoginImageSlider from "@/components/login/loginImageSlider";
import { Row } from "reactstrap";

const LoginContainer = () => {
    return (
        <Row>
            <LoginImageSlider />
            <LoginFormSection />
        </Row>
    )
}

export default LoginContainer;