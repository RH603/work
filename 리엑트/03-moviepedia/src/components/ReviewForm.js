import { useState } from "react";
import FileInput from "./FileInput.js";
import RatingInput from "./RatingInput.js";

function ReviewForm() {
  // const[title, setTitle] = useState("");
  // const[rating, setRating] = useState(0);
  // const[content, setContent] = useState("");

  const [values, setValues] = useState({
    // 위에 선언된 useState를 한번에 선언하는 방법
    title: "",
    rating: 0,
    content: "",
    imgUrl: null,
  });

  //   const handeleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  const handleChange = (name, value) => {
    // 위에 선언된 함수를 한번에 선언 하는 방법
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // 위에 있는 함수
  // setValues((prevValues) => {
  //   return {...prevValues,[name]: value,};
  // });

  // 위의 함수를 2개로 나누지 않고 하나의 함수로 제어 하는 방법
  // const handleChange = (e) => {
  //   let name, value;
  //   if (e.files !== null) {
  //     value = e.target.files[0];
  //   } else {
  //     value = e.target.value;
  //   }
  //   name = e.target.name;
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   preventDefault는 이벤트 막는 함수
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" onChange={handleChange} value={values.imgUrl} />
      {/* 제목 */}
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      {/* oninput = 입력할때마다 input 태그 에서만 가능 */}
      {/* onchange = 입력이 끝나고 엔터 했을때 */}
      {/* 별점 */}
      <RatingInput
        type="numner"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
