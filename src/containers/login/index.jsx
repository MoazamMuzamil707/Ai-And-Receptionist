"use client";
import NoAuthPagesLayout from "@/components/layouts/noAuth";
import LoginFormSection from "@/components/login/loginFormSection";
import LoginImageSlider from "@/components/login/loginImageSlider";

const LoginContainer = () => {
    return (
        <NoAuthPagesLayout>
            <LoginImageSlider />
            <LoginFormSection />
        </NoAuthPagesLayout>
    )
}

export default LoginContainer;