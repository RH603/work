import { useState } from "react";

const LocaleSelect = ({value, onChange}) => {

    console.log(value)
    const handleChange = (e) => onChange(e.target.value)
  return (
    <select value={value} onChange={handleChange}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
    </select>
  );
};

export default LocaleSelect;
