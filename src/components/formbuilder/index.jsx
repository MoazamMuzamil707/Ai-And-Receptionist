import MultiStepForm from "./multistep";
import SingleForm from "./singleform";


const FormBuilder = ({ name, formConfig, onSubmit, buttonText, formType, multistep, selectedData, mode, endpoint, setModal, setSuccessModal, successModal,SignUpButton,SignUpButtonShow }) => {
    return (
        <>
            {multistep ?
                <MultiStepForm
                    name={name}
                    formConfig={formConfig}
                    onSubmit={onSubmit}
                    buttonText={buttonText}
                    formType={formType}
                    selectedData={selectedData}
                    mode={mode}
                    endpoint={endpoint}
                />:
                    <SingleForm
                        name={name}
                        formConfig={formConfig}
                        onSubmit={onSubmit}
                        buttonText={buttonText}
                        formType={formType}
                        selectedData={selectedData}
                        mode={mode}
                        endpoint={endpoint}
                        setModal={setModal}
                        setSuccessModal={setSuccessModal}
                        successModal={successModal}
                        SignUpButton={SignUpButton}
                        SignUpButtonShow={SignUpButtonShow}
                    />
            }
        </>
    )
};

export default FormBuilder;