import React, { useState } from "react";
import "./RatingInput.css";
import Rating from "./Rating";

const RatingInput = ({name, value, onChange}) => {
  // value prop 은 앞의 ReviewForm 컴포넌트에서 받아온 values.rating
  // 여기서 새로 만들어준 rating State 는 별을 색칠하는 용도의 점수이다.
  const [rating, setRating] = useState(value);

  // 실제 values.rating을 바꾸는 함수는 onChange 이고,
  // 이 함수를 실행 하는 시기는 Star 컴포넌트의 onClick 시점이다.

  const handleSelect = (nextValue) => onChange(name, nextValue);
  const handleMouseOut = () => setRating(value);
  return (
    <div>
      <Rating
        className="RatingInput"
        hoverRating={rating}
        onSelect={handleSelect}
        onHover={setRating}
        onMouseOut={handleMouseOut}
      />
      {/* <Star selected={value >= 1} value={value} />
      <Star selected={value >= 2} value={value} />
      <Star selected={value >= 3} value={value} />
      <Star selected={value >= 4} value={value} />
      <Star selected={value >= 5} value={value} /> */}
    </div>
  );
};

export default RatingInput;
