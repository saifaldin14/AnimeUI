import React, { useState } from "react";
import { Editable } from "./Editable";

export default {
  component: Editable,
};

export const Default = () => {
  const [value, setValue] = useState("Click to edit me");
  return <Editable value={value} onChange={setValue} />;
};

export const Disabled = () => {
  const [value, setValue] = useState("I am disabled");
  return <Editable value={value} onChange={setValue} disabled={true} />;
};

export const CustomColors = () => {
  const [value, setValue] = useState("Custom colors");
  return (
    <Editable
      value={value}
      onChange={setValue}
      fromColor="#00F260"
      toColor="#0575E6"
      textColor="#ff0000"
    />
  );
};

export const CustomFontSize = () => {
  const [value, setValue] = useState("Large font size");
  return <Editable value={value} onChange={setValue} fontSize={24} />;
};
