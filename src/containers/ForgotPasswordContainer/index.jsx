"use client";
import ForgotPasswordFormSection from "@/components/ForgotPassword/ForgotPasswordFormSection";
import ForgotPasswordImageSlider from "@/components/ForgotPassword/ForgotPasswordImageSlider";
import NoAuthPagesLayout from "@/components/layouts/noAuth";

const ForgotPasswordContainer = () => {
    return (
        <NoAuthPagesLayout>
            <ForgotPasswordImageSlider />
            <ForgotPasswordFormSection />
        </NoAuthPagesLayout>
    )
}

export default ForgotPasswordContainer;