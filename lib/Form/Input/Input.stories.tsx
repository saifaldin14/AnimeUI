import React, { useState } from "react";
import { Input } from "./Input";

export default {
  component: Input,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return <Input value={value} onChange={setValue} placeholder="Enter text" />;
};

export const WithPlaceholder = () => {
  const [value, setValue] = useState("");
  return (
    <Input value={value} onChange={setValue} placeholder="Type something..." />
  );
};

export const Disabled = () => (
  <Input value="Disabled input" onChange={() => {}} disabled={true} />
);

export const ErrorState = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (val: string) => {
    setValue(val);
    setError(val.length < 5);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Enter at least 5 characters"
      error={error}
      errorMessage="Minimum 5 characters required"
    />
  );
};

export const CustomColors = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder="Custom colors"
      fromColor="#00F260"
      toColor="#0575E6"
      textColor="#ffffff"
    />
  );
};

export const WithLabel = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label className="block mb-2 font-anime">Username</label>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Enter your username"
      />
    </div>
  );
};

export const PasswordInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      type="password"
      value={value}
      onChange={setValue}
      placeholder="Enter your password"
      textColor="#ffffff"
      fromColor="#0f2027"
      toColor="#2c5364"
    />
  );
};
