import MainComponent from "@/components/Main"
import SinglePage from "@/components/SinglePageComponent";
import { settings } from "@/data/formdata";
import { templateTableData } from "@/data/columnsdata/whatsapp";

const TemplatesContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("Form Data in WorkCode", formData)
    }

    return (
        <>
            <MainComponent BreadCrumbData={{}}>
                <SinglePage
                    module={"Whatsapp"}
                    pageTitle={"Templates"}
                    formData={settings.templateFormData}
                    onFormSubmit={onFormSubmit}
                    tableColumn={templateTableData}
                    tableType={"simple"}
                />
            </MainComponent>
        </>
    )
}

export default TemplatesContainer;