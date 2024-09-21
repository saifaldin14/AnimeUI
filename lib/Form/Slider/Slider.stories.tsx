import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  component: Slider,
};

export const Default = () => {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} />;
};

export const CustomRange = () => {
  const [value, setValue] = useState(5);
  return (
    <Slider value={value} onChange={setValue} min={0} max={10} step={0.5} />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} disabled={true} />;
};

export const CustomColors = () => {
  const [value, setValue] = useState(75);
  return <Slider value={value} onChange={setValue} color="#00F260" />;
};

export const StepValues = () => {
  const [value, setValue] = useState(0);
  return (
    <Slider value={value} onChange={setValue} min={0} max={100} step={10} />
  );
};
