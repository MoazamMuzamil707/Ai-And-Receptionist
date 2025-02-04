import { useEffect, useState } from 'react';
import { post, put } from '@/api';
import { createValidationSchema } from '@/lib/helpers/validation';
import Form from './form';

const SingleForm = ({ name, formConfig, onSubmit, buttonText, formType, endpoint, selectedData, mode, setModal, setSuccessModal,SignUpButton,SignUpButtonShow }) => {
  const [formData, setFormData] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formConfiguration, setFormConfiguration] = useState(formConfig);

  const apiCall = async () => {
    if (mode == 'add') {
      let res = await post(endpoint, formData);
      if (res.responseCode == 201) {
        setModal(false)
        setSuccessModal(true)
      }
    } else {
      let data = { ...formData }
      delete data.id;
      let res = await put(endpoint, { id: selectedId, data });
      if (res.responseCode == 200) {
        setModal(false)
        setSuccessModal(true)
      }
    }
  }

  useEffect(() => {
    setSelectedId(selectedData?.id)
    setFormData(selectedData);
  }, [selectedData]);

  // const handleSubmit = (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   onSubmit(formData);
  //   // apiCall();
  //   setLoading(false);
  // };

  const handleSubmit = async (e,formData) => {
    e.preventDefault();
    setLoading(true);
    console.log("formConfiguration",formConfiguration)
    const validationSchema = createValidationSchema(formConfiguration);

    try {
      const updatedConfig = formConfiguration.map(field => {
        return {
          ...field,
          err: false,
          errMsg: ""
        };
      });
      setFormConfiguration(updatedConfig);
      await validationSchema.validate(formData, { abortEarly: false });
      onSubmit(formData);
    } catch (err) {
      // Handle validation errors
      if (err.inner && err.inner.length > 0) {
        const updatedConfig = formConfiguration.map(field => {
          const error = err.inner.find(error => error.path === field.name);
          if (error) {
            return {
              ...field,
              err: true,
              errMsg: error.message
            };
          }
          return {
            ...field,
            err: false,
            errMsg: ""
          };
        });
        setFormConfiguration(updatedConfig);
      } else {
        console.error("Unexpected validation error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formType == "filters" ? { position: 'relative', minHeight: '85vh' } : { opacity: 1 }}>
      <Form
        data={formData}
        formType={formType}
        formConfiguration={formConfiguration}
        onSubmit={handleSubmit}
        apiCall={apiCall}
        mode={mode}
        buttonText={buttonText}
        loading={loading}
        SignUpButton={SignUpButton}
        SignUpButtonShow={SignUpButtonShow}
      />
    </div>
  );
}

export default SingleForm;