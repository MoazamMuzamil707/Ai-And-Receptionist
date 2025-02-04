import ChangePasswaord from "@/app/ChangePassword/page"
import BreadCrumb from "@/components/common/BreadCrumb"
import FormBuilder from "@/components/formbuilder"
import ErrorModal from "@/components/modals/sweetAlerts/error"
import SinglePage from "@/components/SinglePageComponent"
import { auth } from "@/data/formdata"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardHeader, Col, Container, Row } from "reactstrap"
// import SinglePage from "@/components/SinglePageComponent";
// import { settings } from "@/data/formdata";
// import { templateTableData } from "@/data/columnsdata/whatsapp";

const ChangePasswordContainer = () => {

    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorResponseMsg, setErrorResponseMsg] = useState({ email: "", password: "" });

    const router = useRouter();
    const handleSubmit = async (formData) => {
        console.log('Form Data:', formData);
        const data = await AuthServices.login(formData);
        console.log("data", data);
        if (data?.status == "success") {
            // const result = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + "/" + permissions, { headers: { 'Authorization': `Bearer ${Cookies.get('token')}` } });
            router.push('/Dashboard')
            // if(result) {
            //     Cookies.set("menuData", JSON.stringify(RoutePermissions))
            //     router.push('/Dashboard')
            // }

        } else {
            setOpenErrorModal(!openErrorModal)
            setErrorResponseMsg(data.message)
        }
    };

    return (
        <>
                <Container fluid>
                    <BreadCrumb title={"Setting"} pageTitle={"Change Password"} />
                    <Row>
                        <Col lg={12}>
                            <Card id="leadsList">
                                <CardHeader className="border-0">
                                    <Row className="g-4 align-items-center">
                                        <div className="text-center">
                                            <h5 className="text-primary">Create new password</h5>
                                            <p className="text-muted">Your new password must be different from previous used password.</p>
                                        </div>
                                        <Col className="d-flex justify-content-center align-items-center">
                                            <FormBuilder
                                                selectedData={formData}
                                                formConfig={auth?.changePasswaordFormData}
                                                onSubmit={handleSubmit}
                                                buttonText={"Update Password"}
                                            />
                                        </Col>
                                    </Row>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            <ErrorModal isOpen={openErrorModal} errorResponseMsg={errorResponseMsg} tog_errorMessage={setOpenErrorModal} />
        </>
    )
}

export default ChangePasswordContainer;