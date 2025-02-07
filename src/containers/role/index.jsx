import MainComponent from "@/components/Main"
import SinglePage from "@/components/SinglePageComponent";
import { settings } from "@/data/formdata";

const RoleContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("FOrm Data in roles", formData)
    }
    return (
        <>
            <MainComponent BreadCrumbData={{}}>
                <SinglePage
                    filters={false}
                    module={"Settings"}
                    pageTitle={"Roles"}
                    formData={settings.rolesFormData}
                    onFormSubmit={onFormSubmit}
                    tableType={"simple"}
                />   
            </MainComponent>
        </>
    )
}

export default RoleContainer;