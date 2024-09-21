import React, { useState } from "react";
import { Select } from "./Select";

export default {
  component: Select,
};

const options = [
  { label: "Option One", value: "option1" },
  { label: "Option Two", value: "option2" },
  { label: "Option Three", value: "option3" },
];

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select an option"
    />
  );
};

export const SelectedValue = () => {
  const [value, setValue] = useState("option2");
  return <Select options={options} value={value} onChange={setValue} />;
};

export const Disabled = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      disabled={true}
    />
  );
};

export const CustomColors = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      fromColor="#00F260"
      toColor="#0575E6"
      textColor="#ffffff"
    />
  );
};

export const WithLongOptions = () => {
  const longOptions = [
    { label: "Very Long Option Text That Might Wrap", value: "long1" },
    { label: "Another Long Option Text That Might Wrap", value: "long2" },
    { label: "Yet Another Long Option Text That Might Wrap", value: "long3" },
  ];
  const [value, setValue] = useState("");
  return (
    <Select
      options={longOptions}
      value={value}
      onChange={setValue}
      placeholder="Select a long option"
    />
  );
};

export const CustomPlaceholder = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Custom Placeholder"
    />
  );
};
