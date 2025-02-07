import { AuthServices } from "@/api/services";
import FormBuilder from "@/components/formbuilder";
import { forgotpassword } from "@/data/formdata";
import { useRouter } from "next/navigation";
import ErrorModal from "../modals/sweetAlerts/error";
import { useState } from "react";
import axios from "axios";
import { permissions } from "@/api/communications";
import Cookies from "js-cookie";
import { RoutePermissions } from "@/data/permissionsdata/RoutePermissions";

const ForgotPasswordFormSection = () => {
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const router = useRouter();
    const handleSubmit = async (formData) => {
        console.log('Form Data:', formData);
        const data = await AuthServices.forgotpassword(formData);
        if(data?.status == 'success') {
            // const result = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + "/" + permissions, { headers: { 'Authorization': `Bearer ${Cookies.get('token')}` } });
            if(result) {
                Cookies.set("menuData", JSON.stringify(RoutePermissions))
                router.push('/Login')
            }

        } else {
            alert(data)
            // alert(data?.message)
        }
    };
    
    return (
        <>
            <div className="col-md-6">
                <div className="p-lg-5 p-4">
                    <div className="d-flex justify-content-between py-4">
                        <div>
                            <h5 className="text-primary">Trouble Signing in?</h5>
                            <p className="text-muted">Enter registered username to receive recovery email</p>
                        </div>
                        <div>
                            <img src="/assets/images/logo-m3.png" width="50" height="60" />
                        </div>
                    </div>
                    <FormBuilder formConfig={forgotpassword.forgotpasswordFormData} onSubmit={handleSubmit} buttonText={"Send Login Link"} />
                </div>
            </div >
            <ErrorModal isOpen={openErrorModal} tog_errorMessage={setOpenErrorModal} />
        </>
    )
}

export default ForgotPasswordFormSection;