import React from "react";
import { objectValueString } from "../../../models/types/common";
import useFormHook from "../../../utils/useFormHook";
import validatorObject from "./validator";

export interface IFormData {
  selectType: string;
  emailType: string;
  inputType: string;
}

export default function Index() {
  const { formData, handleInputChange, inValidRules, validateAllRules } =
    useFormHook(
      { selectType: "", emailType: "", inputType: "" } as IFormData & objectValueString,
      validatorObject
    );


  const renderValidaion = (selectType: string) => {
    const invalidObject = inValidRules.get(selectType);
    if(invalidObject) {
      const objectArray = Object.entries(invalidObject);
      return objectArray.map(([, value], index) => <div key={index}>{value}</div>);
    }

  }
  const NAME_OBJECT: {[key in keyof IFormData]: keyof IFormData} = {
    selectType: 'selectType',
    emailType: 'emailType',
    inputType: 'inputType',
  } 

  return (
    <form>
      <label>
        Pick your favorite flavor:
        <select
          value={formData.selectType}
          onChange={handleInputChange}
          name={NAME_OBJECT.selectType} 
        >
          <option value="">please choose</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      {renderValidaion('selectType')}
      <br />
      <label>
        Member email:
        <input
          name={NAME_OBJECT.emailType} 
          type="email"
          value={formData.emailType}
          onChange={handleInputChange}
        />
      </label>
      {renderValidaion('emailType')}
      <br />
      <label>
        Number of guests:
        <input
          name={NAME_OBJECT.inputType} 
          type="number"
          value={formData.inputType}
          onChange={handleInputChange}
        />
      </label>
      {renderValidaion('inputType')}
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          validateAllRules();
        }}
      >
        submit
      </button>
    </form>
  );
}
