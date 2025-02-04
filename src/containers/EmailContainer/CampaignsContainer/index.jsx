import MainComponent from "@/components/Main"
// import SinglePage from "@/components/SinglePageComponent";
// import { settings } from "@/data/formdata";

const CampaignsContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("Form Data in WorkCode", formData)
    }

    return (
        <>
            {/* <SinglePage
                    module={"Email"}
                    pageTitle={"Campaigns"}
                    formData={settings.workcodesFormData}
                    onFormSubmit={onFormSubmit}
                /> */}
        </>
    )
}

export default CampaignsContainer;