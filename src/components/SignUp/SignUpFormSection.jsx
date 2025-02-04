import { AuthServices } from "@/api/services";
import FormBuilder from "@/components/formbuilder";
import { auth } from "@/data/formdata";
import { useRouter } from "next/navigation";
import ErrorModal from "../modals/sweetAlerts/error";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/slices/auth/login/thunk";
import { reset_login_flag } from "@/slices/auth/login/reducer";
import { persistor } from "@/slices";

const SignUpFormSection = () => {
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [formData, setFormData] = useState({ email: "", userName: "", password: "", confirmPassword: "" });
    const [errorResponseMsg, setErrorResponseMsg] = useState({ email: "", userName: "", password: "", confirmPassword: "" });

    const dispatch = useDispatch();

    const router = useRouter();

    const handleSubmit = async (formData) => {
        console.log('Form Data:', formData);
        const data = await dispatch(loginUser(formData, router));
        // const data = await AuthServices.login(formData);
        // console.log("data",data);
        // console.log("data",data?.status);
        if (data?.status == "success") {

            // const result = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + "/" + permissions, { headers: { 'Authorization': `Bearer ${Cookies.get('token')}` } });
            // router.push('/Dashboard')
            // if(result) {
            //     Cookies.set("menuData", JSON.stringify(RoutePermissions))
            //     router.push('/Dashboard')
            // }

        } else {
            setOpenErrorModal(!openErrorModal)
            setErrorResponseMsg(data?.message)
        }
    };

    return (
        <>
            <div className="col-md-6">
                <div className="p-lg-5 p-4">
                    <div className="d-flex justify-content-between py-4">
                        <div>
                            <h5 className="text-primary">Welcome Back !</h5>
                            <p className="text-muted" style={{ fontSize: "13px" }} >Sign Up to continue to Ai And Receptionist—Automation services.</p>
                        </div>
                        <div>
                            <img src="/assets/images/DarkLogo.png" width="50" height="60" />
                        </div>
                    </div>
                    <FormBuilder selectedData={formData} formConfig={auth.SignUpFormData} onSubmit={handleSubmit} buttonText={"Sign Up"} />
                </div>
            </div >
            <ErrorModal isOpen={openErrorModal} errorResponseMsg={errorResponseMsg} tog_errorMessage={setOpenErrorModal} />
        </>
    )
}

export default SignUpFormSection;