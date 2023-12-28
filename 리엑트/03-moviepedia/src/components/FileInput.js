import { useEffect, useRef, useState } from "react";
import resetImg from "../assets/ic-reset.png";
import "./FileInput.css"
import placeholderImg from "../assets/preview-placeholder.png"
function FileInput({ onChange, name, value, initialPreview }) {
  // console.log(initialPreview);
  // 리엑트 에서는 document.querySelector 대신 useRef 를 사용한다
  const inputRef = useRef();
  const [preview, setPreview] = useState(initialPreview);

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
    // setPreview(nextFile)
  };
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if(!inputNode) return

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    // 값이 없을수도 있기 때문에 useEffect 를 종료해준다
    if (!value) return;
    // ObjectURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    // ObjectURL 를 만들면 웹 브라우저에 메모리를 할당한다. 할당한 이후에는 해제를 해줘야 메모리 낭비를 방지할수 있다.
    // useEffect 에서는 사이드 이펙트(웹 브라우저에 메모리를 할당 한 createObjectURL)를 정리 하는 기능을 제공한다.
    // 리턴을 해줄 때 정리하는 함수를 리턴해주면 사이드 이펙트를 정리할 수 있다.
    const nextPreview = URL.createObjectURL(value); //createObjectURL의 피라미터는 Blob, file, null 타입의 데이터가 들어 와야 한다
    setPreview(nextPreview);

    // 디펜던시 리스트 값이 바뀌면 새로 콜백을 실행하는데 이 전에 리엑트는 앞에서 리턴한 정리 함수를 실행해서
    // 사이드 이펙트를 정리한다.
    return () => {
      // 재렌더링이 실행되면 useEffect 콜백 함수 실행 => 그 안에 있는 return 함수 기억 => 사용자 파일 변경되면
      // => value 값 변경으로 인한 useEffect 함수 실행 및 콜백 함수 실행 => 앞에서 기억해둔 return 함수 실행
      // 앞에서 만들어진 사이드 이펙트가 더이상 쓸모 없어졌기 때문
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className="FileInput">
      {/* img태그를 사용할때 div태그 안에 넣어야 한다.  */}
      <img className={`FileInput-preview ${preview ? "selected" : ""}`} src={preview} alt="이미지 미리보기" />
      {/* accept 파일 제한 하는 속성 */}
      <input
        className="FileInput-hidden-overlay"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <button className="FileInput-clear-button" onClick={handleClearClick}>
          <img src={resetImg || placeholderImg} alt="선택해제" />
        </button>
      )}
    </div>
  );
}

export default FileInput;
