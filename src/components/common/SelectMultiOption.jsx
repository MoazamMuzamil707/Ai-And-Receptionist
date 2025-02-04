import { useEffect, useState } from "react";
import { Label } from "reactstrap";
import Select2 from "./Select2";
import Select from "react-select";
import { colors } from "@mui/material";
import Input from "./Input";

const SelectMultiOption = ({ name, label, selectedOption, handleSelectChange, data, required, disabled, col = 12, formData }) => {
  const [apiData, setApiData] = useState([]);
  const [_selectedOption, _setSelectedOption] = useState(null);
  const [_selected2Option, _setSelected2Option] = useState(null);
  const [visitWebsite, setVisitWebsite] = useState("");
  const [visitWebsiteType, setVisitWebsiteType] = useState(null);
  const [callPhoneType, setCallPhoneType] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (!data?.static) {
      // apiCall();  // Uncomment if you want to load data from API
    } else {
      const selected = data.data.find((t) => t.value === selectedOption);
      _setSelectedOption(selected);
    }
  }, [selectedOption]);

  const handleChange = (selectedOption) => {
    _setSelectedOption(selectedOption);
    handleSelectChange(selectedOption); // Call parent handler
  };

  const handleSelec2Change = (name, selectedOption) => {
    // setFormData({
    //   ...formData,
    //   [name]: selectedOption?.value,
    // });
    // if (name === "action") {
    //   setType(selectedOption?.value)
    // }
console.log("selectedOption",selectedOption)
    _setSelected2Option(selectedOption)
    if(selectedOption.value == "Visit_Website_Type"){
      setVisitWebsiteType(selectedOption)
    }
    if(selectedOption.value == "Call_phone_Type"){   
      setCallPhoneType(selectedOption)
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let mediaField = null;

  if (selectedMedia === "image") {
    mediaField = (
      <>
        <div className="input-group">
          <b style={{ margin: "10px 10px 0px 0px" }}>Image </b>
          <input
            type="file"
            className="form-control"
            name="attachment"
            id="header_media"
            placeholder="Choose JPG or PNG file"
            accept=".png, .jpeg, .jpg"
          />
          <button type="submit" className="btn btn-primary submitFile" data-loading-text="Process...">
            <span className="d-flex align-items-center">
              <span className="icon">
                <i className="ri-check-line"></i>
              </span>
              <span className="spinner-border spinner-border flex-shrink-0" role="status" style={{ display: "none" }}>
                <span className="visually-hidden">Loading...</span>
              </span>
            </span>
          </button>
        </div>
        <span className="error EmptyFile" style={{ display: "none" }}>This field is required</span>
        <span className="error AcceptFile" style={{ display: "none" }}>Only accept .png, .jpg and Image size maximum 3 MB</span>
      </>
    );
  } else if (selectedMedia === "video") {
    mediaField = (
      <>
        <div className="input-group">
          <b style={{ margin: "10px 10px 0px 0px" }}>Video </b>
          <input
            type="file"
            className="form-control"
            name="attachment"
            id="header_media"
            placeholder="Choose MP4 file"
            accept=".mp4"
          />
          <button type="submit" className="btn btn-primary submitFile" data-loading-text="Process..." >
            <span className="d-flex align-items-center">
              <span className="icon">
                <i className="ri-check-line"></i>
              </span>
              <span className="spinner-border flex-shrink-0" role="status" style={{ display: "none" }}>
                <span className="visually-hidden">Loading...</span>
              </span>
            </span>
          </button>
        </div>
        <span className="error EmptyFile" style={{ display: "none" }}>This field is required</span>
        <span className="error AcceptFile" style={{ display: "none" }}>Only accept .mp4 and Video size maximum 20 MB</span>
      </>
    );
  } else if (selectedMedia === "document") {
    mediaField = (
      <>
        <div className="input-group">
          <b style={{ margin: "10px 10px 0px 0px" }}>Document </b>
          <input
            type="file"
            className="form-control"
            name="attachment"
            id="header_media"
            placeholder="Choose PDF file"
            accept=".pdf"
          />
          <button type="submit" className="btn btn-primary submitFile" data-loading-text="Process..." >
            <span className="d-flex align-items-center">
              <span className="icon">
                <i className="ri-check-line"></i>
              </span>
              <span className="spinner-border flex-shrink-0" role="status" style={{ display: "none" }}>
                <span className="visually-hidden">Loading...</span>
              </span>
            </span>
          </button>
        </div>
        <span className="error EmptyFile" style={{ display: "none" }}>This field is required</span>
        <span className="error AcceptFile" style={{ display: "none" }}>Only accept .pdf and PDF size maximum 12 MB</span>
      </>
    );
  }

  return (
    <>
      <div className={`col-md-${col} mb-3`}>
        <Label className="form-check-label mb-2" htmlFor={`select-2-${name}`}>
          {label}
          {required && <span className="text-danger">*</span>}
        </Label>
        <Select
          className="mb-0"
          value={_selectedOption}
          onChange={handleChange}
          options={data?.static ? data?.data : apiData}
          id={`select-2-${name}`}
          disabled={disabled}
        />

        {_selectedOption?.value === "media" && (
          <div
            className="col-md-12 mb-3 mt-3"
            style={{
              margin: "0 0 10px",
              padding: "10px",
              backgroundColor: "#eee",
              fontWeight: 500,
              borderRadius: "8px",
            }}
          >
            <Label>Media Field</Label>
            <div className="modal-body">
              <div className="row justify-content-left" id="media">
                <div className="row col-lg-12">
                  {/* Radio Buttons */}
                  <div className="form-check1 col-lg-4 text-center">
                    <label className="form-check-label" htmlFor="image">
                      <input
                        className="form-check-input media-radio"
                        type="radio"
                        name="media"
                        id="image"
                        value="image"
                        onChange={() => setSelectedMedia("image")}
                      />
                      <i className="ri-image-line custom-icon" style={{ fontSize: "48px", display: "block", margin: "0 auto" }}></i>
                      <span style={{ display: "block", marginTop: "10px" }}>Image</span>
                    </label>
                  </div>
                  <div className="form-check1 col-lg-4 text-center">
                    <label className="form-check-label" htmlFor="video">
                      <input
                        className="form-check-input media-radio"
                        type="radio"
                        name="media"
                        id="video"
                        value="video"
                        onChange={() => setSelectedMedia("video")}
                      />
                      <i className="ri-video-line custom-icon" style={{ fontSize: "48px", display: "block", margin: "0 auto" }}></i>
                      <span style={{ display: "block", marginTop: "10px" }}>Video</span>
                    </label>
                  </div>
                  <div className="form-check1 col-lg-4 text-center">
                    <label className="form-check-label" htmlFor="document">
                      <input
                        className="form-check-input media-radio"
                        type="radio"
                        name="media"
                        id="document"
                        value="document"
                        onChange={() => setSelectedMedia("document")}
                      />
                      <i className="ri-file-text-line custom-icon" style={{ fontSize: "48px", display: "block", margin: "0 auto" }}></i>
                      <span style={{ display: "block", marginTop: "10px" }}>Document</span>
                    </label>
                  </div>
                </div>

                {/* Info Section */}
                <div className="col-lg-12 mt-3">
                  <p>
                    <span style={{ color: "initial" }}>
                      <b>Samples for header content</b>
                      <br />
                      <br />
                      To help us review your content, provide examples of the variables or media in the header. Do not include any customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of our services.
                    </span>
                  </p>
                </div>
                <div className="col-lg-12 mt-3">{mediaField}</div>
              </div>
            </div>
          </div>
        )}

        {_selectedOption?.value === "text" && (
          <div className="col-md-12 mb-3 mt-3">
            <Label htmlFor="header">Header Text</Label>
            <textarea
              className="form-control"
              name="text_desc"
              id="text_desc"
              placeholder="Enter Text"
              cols="30"
              rows="1"
              maxLength="60"
            />

            <div className="row justify-content-left" >
              {/* Placeholder for future variable items */}
              {/* You can dynamically render items here */}
            </div>

            <div className="row justify-content-left">
              <div className="col-lg-6 mt-2">
                <button
                  type="button"
                  id="add_text_btn"
                  className="btn btn-primary btn-Custom"
                  data-toggle="modal"
                  data-target="#variable_modal_text"
                >
                  Add Variable
                </button>
              </div>
            </div>
          </div>
        )}

        {_selectedOption?.value === "action" && (
          <div className="col-md-12 mb-3 mt-3">
            <Select2
              name={"callToActionType"}
              label={`Call to Action Type`}
              handleSelectChange={(selectedOption) => handleSelec2Change("callToActionType", selectedOption)}
              data={{
                static: true,
                data: [
                  { label: "Visit Website", value: "Visit_Website_Type" },
                  { label: "Call Phone Number", value: "Call_phone_Type" }
                ]
              }}
              col={12}
            />
          </div>
        )}

        {visitWebsiteType?.value === "Visit_Website_Type" && (
          <div style={{ backgroundColor: "#EEEEEE", padding: "10px", borderRadius: "10px" }}>
            <div className="row justify-content-left mt-3" >
              <div className="col-lg-3">
                <Select2
                  name={"typeOfAction"}
                  label={`Type of action`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("typeOfAction", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "Visit Website", value: "Visit Website" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-2">
                <Select2
                  name={"TypeUrl"}
                  label={`URL type`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("callToActionType", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "Static", value: "Static" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"Enter Button Text"}
                  type={"text"}
                  label={`Button Text`}
                  maxLength={""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"https://www.example.com"}
                  type={"text"}
                  label={`Button Text`}
                  className={"form-control button_text_url"}
                  maxLength={"2000"}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-lg-1 mt-4">
                <button
                  type="button"
                  style={{ marginLeft: "-15px" }}
                  className="btn btn-primary ml-4 "
                  onClick={() => setVisitWebsite("show")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {visitWebsite === "show" && (
          <div className="mt-3" style={{ backgroundColor: "#EEEEEE", padding: "10px", borderRadius: "10px" }}>
            <div className="row justify-content-left mt-3" >
              <div className="col-lg-3">
                <Select2
                  name={"typeOfAction"}
                  label={`Type of action`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("typeOfAction", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "Visit Website", value: "Visit Website" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-2">
                <Select2
                  name={"TypeUrl"}
                  label={`URL type`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("callToActionType", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "Static", value: "Static" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"Enter Button Text"}
                  type={"text"}
                  label={`Button Text`}
                  maxLength={""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"https://www.example.com"}
                  type={"text"}
                  label={`Button Text`}
                  className={"form-control button_text_url"}
                  maxLength={"2000"}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-lg-1 mt-4">
                <button
                  type="button"
                  style={{ marginLeft: "-15px" }}
                  className="btn btn-danger ml-4 "
                  onClick={() => setVisitWebsite("")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        )}

        {callPhoneType?.value === "Call_phone_Type" && (
          <div className="mt-3" style={{ backgroundColor: "#EEEEEE", padding: "10px", borderRadius: "10px" }}>
            <div className="row justify-content-left mt-3" >
              <div className="col-lg-3">
                <Select2
                  name={"typeOfAction"}
                  label={`Type of action`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("typeOfAction", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "Call Phone Number", value: "Visit Website" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"Enter Button Text"}
                  type={"text"}
                  label={`Button Text`}
                  maxLength={""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-lg-2">
                <Select2
                  name={"Type"}
                  label={`Country`}
                  handleSelectChange={(selectedOption) => handleSelec2Change("callToActionType", selectedOption)}
                  data={{
                    static: true,
                    data: [
                      { label: "+92", value: "+92" }
                    ]
                  }}
                  col={12}
                />
              </div>

              <div className="col-lg-3">
                <Input
                  name={"button_text"}
                  placeHolder={"Enter Phone Number"}
                  type={"text"}
                  label={`Phone number`}
                  maxLength={"10"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default SelectMultiOption;
