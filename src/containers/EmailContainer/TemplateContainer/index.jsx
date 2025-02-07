import MainComponent from "@/components/Main"
// import SinglePage from "@/components/SinglePageComponent";
// import { settings } from "@/data/formdata";

const TemplateContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("Form Data in WorkCode", formData)
    }

    return (
        <>
            <MainComponent BreadCrumbData={{}}>
                {/* <SinglePage
                    module={"Email"}
                    pageTitle={"Mailing"}
                    formData={settings.workcodesFormData}
                    onFormSubmit={onFormSubmit}

                /> */}
            </MainComponent>
        </>
    )
}

export default TemplateContainer;