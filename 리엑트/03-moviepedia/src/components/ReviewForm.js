import { useState } from "react";

function ReviewForm() {
  // const[title, setTitle] = useState("");
  // const[rating, setRating] = useState(0);
  // const[content, setContent] = useState("");

  const [values, setValues] = useState({
    // 위에 선언된 useState를 한번에 선언하는 방법
    title: "",
    rating: 0,
    content: ",",
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

  const handleChange = (e) => {
    const { name, values } = e.target;
    // 위에 선언된 함수를 한번에 선언 하는 방법
    setValues();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   preventDefault는 이벤트 막는 함수
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      {/* accept 파일 제한 하는 속성 */}
      <input type="file" accept="image/png, image/jpeg" />
      {/* 제목 */}
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      {/* oninput = 입력할때마다 input 태그 에서만 가능 */}
      {/* onchange = 입력이 끝나고 엔터 했을때 */}
      {/* 별점 */}
      <input
        type="text"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
