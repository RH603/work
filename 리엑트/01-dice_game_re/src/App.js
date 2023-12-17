// import './App.css';
import logo from "./assets/logo.png"
import Button from "./Button";
import Board from "./Board";
import { useState } from "react"





function App() {

  const [gameHistory, setGameHistory] = useState([])
  const [otherGameHistory, setOtherGameHistory] = useState([])

  const handleRollClick = () => {
    alert("던지기")
  }
  const handleClearClick = () => {
    alert("처음부터 클릭")
  }
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
