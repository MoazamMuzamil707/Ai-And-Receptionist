import MainComponent from "@/components/Main"
// import SinglePage from "@/components/SinglePageComponent";
// import { settings } from "@/data/formdata";

const MailingContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("Form Data in WorkCode", formData)
    }

    return (
        <>
            {/* <SinglePage
                    module={"Email"}
                    pageTitle={"Mailing"}
                    formData={settings.workcodesFormData}
                    onFormSubmit={onFormSubmit}

                /> */}
        </>
    )
}

export default MailingContainer;