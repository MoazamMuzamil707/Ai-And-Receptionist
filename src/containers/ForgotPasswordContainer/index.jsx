"use client";
import ForgotPasswordFormSection from "@/components/ForgotPassword/ForgotPasswordFormSection";
import ForgotPasswordImageSlider from "@/components/ForgotPassword/ForgotPasswordImageSlider";
import NoAuthPagesLayout from "@/components/layouts/noAuth";
import { Row } from "reactstrap";

const ForgotPasswordContainer = () => {
    return (
        <Row>
            <ForgotPasswordImageSlider />
            <ForgotPasswordFormSection />
        </Row>
    )
}

export default ForgotPasswordContainer;