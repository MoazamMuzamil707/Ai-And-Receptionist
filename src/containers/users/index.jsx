import MainComponent from "@/components/Main"
// import SinglePage from "@/components/SinglePageComponent";
// import { settings } from "@/data/formdata";
// import { users } from '@/api/communications'
const UsersContainer = () => {

    const onFormSubmit = (formData) => {
        console.log("FOrm Data in roles", formData)
    }
    return (
        <>
            {/* <SinglePage
                    // filters={false}
                    endpoint={users}
                    module={"Settings"}
                    pageTitle={"Users"}
                    formData={settings.users}
                    onFormSubmit={onFormSubmit}
                    // multistepForm={true}
                />    */}
        </>
    )
}

export default UsersContainer;