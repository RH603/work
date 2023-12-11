import logo from "./assets/logo.png";
import Board from "./Board";
import "./App.css";
import Button from "./Button";
import { useState } from "react";
import "./Button.css";

// 함수형 컴포넌트 : 컴포넌트를 함수형으로 만든것(번수형으로도 만들수 있음)
//      함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 반드시 대문자여야 한다.
//      함수형 컴포넌트 안에서는 JSX 문법으로 만든 리엑트 엘리먼트를 리턴해줘야 한다.

const style = {
  backgroundColor: "#000",
  color: "#fff",
};

//  JSX 에서는 객체지향 개념이 적용되기 때문에 class 가 아니라 className 으로 적어야 한다.
//  for ==> htmlFor, onclick/ onblur ==> onClick/ onBlur

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // state
  // 던지기 버튼을 누르면 화면에서 주사위 이미지가 바뀌어야 한다.

  // 리엑트에서는 state라는 것을 사용한다 . state는 리엑트에서 변수 같은 것인테 이 state가 바뀔때마다 리엑트가 알아서 화면을 새로 랜더링 해준다.
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  // let value;

  // function useState(initialValue) {
  //   if (value === undefined) {
  //     value = initialValue;
  //   }

  //   const setState = (newValue) => {
  //     value = newValue;
  //   };

  //   return [value, setState];
  // }
  const handleRollClick = () => {
    // alert("던지기함수")
    // 주사위 숫자 뽑아야 한다
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setGameHistory([...gameHistory, nextMyNum]);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    // alert("처음으로 함수")
    setGameHistory([]);
    setOtherGameHistory([]);
  };

  // const Button = document.querySelectorAll("button");
  // Button[0].classList.add("blue")
  // Button[1].classList.add("red")
  // console.log(props.productName, props.productPrice)
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button blue" onClick={handleRollClick}>던지기</Button>
          <Button className="App-button red" onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>
      <div className="App-boards">
        <Board name="나" color="blue" gameHistory={gameHistory} />
        <Board name="상대" color="red" gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
