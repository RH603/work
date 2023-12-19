import { useEffect, useRef, useState } from "react";

function FileInput({ onChange, name, value }) {
  // 리엑트 에서는 document.querySelector 대신 useRef 를 사용한다
  const inputRef = useRef();
  const [preview, setPreview] = useState({});

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
    // setPreview(nextFile)
  };

  useEffect(() => {
    // 값이 없을수도 있기 때문에 useEffect 를 종료해준다
    if(!value) return
    // ObjectURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    const nextPreview = URL.createObjectURL(value)
    setPreview(nextPreview)
  }, [value]);

  return (
    <div>
      {/* img태그를 사용할때 div태그 안에 넣어야 한다.  */}
      <img src={preview} alt="이미지 미리보기" />
      {/* accept 파일 제한 하는 속성 */}
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FileInput;
