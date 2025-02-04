"use client";
import SignUpFormSection from "@/components/SignUp/SignUpFormSection";
import SignUpImageSlider from "@/components/SignUp/SignUpImageSlider";
import NoAuthPagesLayout from "@/components/layouts/noAuth";
import { Row } from "reactstrap";

const SignUpContainer = () => {
    return (
        <Row>
            <SignUpImageSlider />
            <SignUpFormSection />
        </Row>
    )
}

export default SignUpContainer;