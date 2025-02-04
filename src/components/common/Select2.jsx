import { useEffect, useState } from "react";
import { Label } from "reactstrap";
import Select from "react-select";
import { post } from "@/api";
// import { typedata } from "@/api/communications";

const Select2 = ({ name, label, selectedOption, handleSelectChange, data, required, disabled, col = 12 }) => {

  const [apiData, setApiData] = useState([])
  const [_selectedOption, _setSelectedOption] = useState([])
  useEffect(() => {
    if (!data?.static) {
      // apiCall();
    } else {
      // console.log("data",data.data.find(t => t.value == selectedOption))
      _setSelectedOption(data.data.find(t => t.value == selectedOption))
    }
  }, [selectedOption])

  // const apiCall = async () => {
  //   let result = await post(typedata, { models: [data?.model] });
  //   setApiData(result?.data[0]?.typeData)
  //   _setSelectedOption(result?.data[0]?.typeData?.find(t => t.value == selectedOption))

  // }
  return (
    <>
      <div className={`col-md-${col} mb-3 `}>
        <Label className="form-check-label mb-2" htmlFor={`select-2-${name}`}>
          {label}
          {required && <span className="text-danger">*</span>}
        </Label>
        <Select
          className="mb-0"
          value={_selectedOption}
          onChange={handleSelectChange}
          options={data?.static ? data?.data : apiData}
          id={`select-2-${name}`}
          disabled={disabled}
        ></Select>
      </div>
    </>
  );
};

export default Select2;
