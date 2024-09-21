import React, { useState } from "react";
import { Radio } from "./Radio";

export default {
  component: Radio,
};

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <Radio
      name="default"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

export const DisabledOption = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <Radio
      name="disabledOption"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2", disabled: true },
      ]}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

export const CustomColors = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <Radio
      name="customColors"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ]}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
      fromColor="#00F260"
      toColor="#0575E6"
    />
  );
};

export const CustomSize = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <Radio
      name="customSize"
      options={[
        { value: "option1", label: "Large Option 1" },
        { value: "option2", label: "Large Option 2" },
      ]}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
      size={40}
    />
  );
};
