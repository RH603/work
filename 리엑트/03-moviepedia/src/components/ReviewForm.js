import { useState } from "react";
import FileInput from "./FileInput.js";
import RatingInput from "./RatingInput.js";

const INITIAL_VALUES = {
  // 위에 선언된 useState를 한번에 선언하는 방법
  title: "",
  rating: 0,
  content: "",
  imgUrl: null,
}
function ReviewForm({ onSubmit, onSubmitSuccess, initialValues = INITIAL_VALUES, initialPreview, onCancel }) {
  // const[title, setTitle] = useState("");
  // const[rating, setRating] = useState(0);
  // const[content, setContent] = useState("");

  
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

  //   const handeleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    // 위에 선언된 함수를 한번에 선언 하는 방법
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
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

  const handleSubmit = async (e) => {
    //   preventDefault는 이벤트 막는 함수
    e.preventDefault();

    // 새로 만들어서 넣어도 된다
    // const formData = {}

    // 오류를 잡을때 사용하는 try{}catch{}
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      onSubmitSuccess(review)
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    setValues(INITIAL_VALUES)
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" onChange={handleChange} value={values.imgUrl} initialPreview={initialPreview} />
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
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit" disabled={isSubmitting}>확인</button>
      {submittingError?.message && <div>{submittingError.messagec}</div>}
    </form>
  );
}

export default ReviewForm;
