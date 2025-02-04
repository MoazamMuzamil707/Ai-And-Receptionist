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

const LoginFormSection = () => {
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorResponseMsg, setErrorResponseMsg] = useState({ email: "", password: "" });

    const dispatch = useDispatch();
    
    const router = useRouter();

    const handleSubmit = async (formData) => {
        console.log('Form Data:', formData); 
        const data = await dispatch(loginUser(formData, router));
        // const data = await AuthServices.login(formData);
        // console.log("data",data);
        // console.log("data",data?.status);
        if(data?.status == "success") {
            
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
    
    const handleSignUp = async (formData) => {
        router.push('/SignUp')
    };

    
    return (
        <>
            <div className="col-md-6">
                <div className="p-lg-5 p-4">
                    <div className="d-flex justify-content-between py-4">
                        <div>
                            <h5 className="text-primary">Welcome Back !</h5>
                            <p className="text-muted" style={{fontSize:"13px"}} >Sign in to continue to Ai And Receptionist—Automation services.</p>
                        </div>
                        <div>
                            <img src="/assets/images/DarkLogo.png" width="70" height="50" />
                        </div>
                    </div>
                    <FormBuilder selectedData={formData} formConfig={auth.loginFormData} SignUpButton={handleSignUp} SignUpButtonShow={true} onSubmit={handleSubmit} buttonText={"Sign in"} />
                </div>
            </div >
            <ErrorModal isOpen={openErrorModal} errorResponseMsg={errorResponseMsg} tog_errorMessage={setOpenErrorModal} />
        </>
    )
}

export default LoginFormSection;