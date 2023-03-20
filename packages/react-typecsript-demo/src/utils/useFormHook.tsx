import React, { useState } from "react";
import { objectValueString } from "../models/types/common";
import { validatorObj } from "./validateRule/model";

const useFormHook = <T extends objectValueString,>(
  initialValue = {} as T,
  validators: validatorObj<T>
) => {
  const [formData, setFormData] = useState(initialValue);
  const [inValidRules, setInValidRules] = useState(new Map() as Map<string, objectValueString>);

  type targetName = keyof T & string;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let newValue;
    const eventTarget = e.target;

    if (eventTarget.type === "checkbox") {
      newValue = { [eventTarget.name as targetName]: (eventTarget as HTMLInputElement).checked };
    } else {
      newValue = { [eventTarget.name as targetName]: eventTarget.value || "" };
    }
    const formDataCopy = { ...formData, [eventTarget.name]: eventTarget.value };
    validateInput(eventTarget.name as targetName, eventTarget.value);
    setFormData(formDataCopy);
  };

  const validateInput = (targetName: targetName, targetValue: string) => {
    inValidRules.set(
      targetName,
      validators[targetName].getAllInvalidRule(targetValue)
    );
    setInValidRules(new Map(inValidRules))
  };

  const validateAllRules = () => {
    const keys = Object.keys(formData) as (keyof T)[];
    keys.forEach((key) => {
      const targetKey = key as targetName; 
      const value = formData[targetKey];
      if(typeof value === "string") {
        inValidRules.set(
          targetKey,
          validators[targetKey].getAllInvalidRule(value)
        );
      }
    })
    setInValidRules(new Map(inValidRules))
  };

  return { formData, handleInputChange, inValidRules, validateAllRules };
};

export default useFormHook;
