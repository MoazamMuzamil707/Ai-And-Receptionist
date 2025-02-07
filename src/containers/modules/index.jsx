import MainComponent from "@/components/Main"
import SinglePage from "@/components/SinglePageComponent";
import { settings } from "@/data/formdata";
import { modules } from '@/api/communications'
const ModuleContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("FOrm Data in roles", formData)
    }
    return (
        <>
            <MainComponent BreadCrumbData={{}}>
                <SinglePage
                    // filters={false}
                    endpoint={modules}
                    module={"Settings"}
                    pageTitle={"Module"}
                    formData={settings.modules}
                    onFormSubmit={onFormSubmit}
                    // multistepForm={true}
                />   
            </MainComponent>
        </>
    )
}

export default ModuleContainer;