// import logo from './logo.svg';
import './App.css';
import HandIcon from "./Handleicon";
import "./Handle-icon.css";
import reset from "./assets/ic-reset.svg";
import HandButton from "./HandButton";
import { generateRandomHand } from "./utils";
import { compareHand } from "./utils";
import { useState } from "react";

// const hand = document.querySelectorAll(".Hand")
// console.log(hand[1])

function getResult(me,other){
  const comparison = compareHand(me, other);
  // hand.classList.remove("winner")
  if(comparison > 0) {
    // hand[0].classList.add("winner")
    return "승리"
  }
  if(comparison < 0) {
    // hand[1].classList.add("winner")
    return "패배"
  }
  return "무승부"
  
}


function App() {
  const [Hand, setHand]= useState("rock")
  const [OtherHand, setOtherHand] = useState("rock")
  const [gameHistory, setGameHistory] = useState([])
  const [score, setScore] = useState(0)
  const [otherScore, setOtherScore] = useState(0)
  const [bet, setBet] = useState(1)
  const [iswin, setIswin] = useState(0)


  const handleButtonClick = (value) => {
    // hand[0].classList.remove("winner")
    // hand[1].classList.remove("winner")
    const nextOtherHand = generateRandomHand()
    const nextHistory = getResult(value, nextOtherHand)
    const comparison = compareHand(value, nextOtherHand)
    setIswin(comparison)
    setHand(value);
    setOtherHand(nextOtherHand);
    // gameHistory = []
    // setGameHistory(nextHistory)
    setGameHistory([...gameHistory, nextHistory])
    // gameHistory.push(nextHistory)
  if(comparison > 0 ) setScore(score + bet)
  if(comparison < 0 ) setOtherScore(otherScore + bet)
  };

  const handleBetChange = (e) => {
    let num =  Number(e.target.value);
    if(num > 9) num = 9;
    if(num < 1) num = 1;
    num = Math.floor(num)
    setBet(num)
    console.log(num)
  }

  const handleClearClick = () => {
    setHand("rock")
    setOtherHand("rock")
    setScore(0)
    setOtherScore(0)
    setBet(1)
    setGameHistory([])
    setIswin("")
  }

  return (
    <>
      <div className='App'>
        <h1 className='App-heading'>가위바위보</h1>
        <img className='App-reset' src={reset} alt="초기화" onClick={handleClearClick}/>
        <div className="App-scores">
          <div className='Score'>
            <div className='Score-num'>{score}</div>
            <div className='Score-name'>나</div>
          </div>
          <div className='versus'>:</div>
          <div className='Score'>
            <div className='Score-num'>{otherScore}</div>
            <div className='Score-name'>상대</div>
          </div>
        </div>
        <div className="Box App-box">
          <div className="Box-inner">
            {/* 기위 바위 보 */}
            <div className='App-hands'>
              <div className={`Hand ${iswin == 0 ? "" : (iswin == 1) ? "winner": ""}`}>
                <HandIcon value={Hand} className="Hand-icon" />
              </div>
              <div className='versus'>VS</div>
              <div className={`Hand ${iswin == 0 ? "" : (iswin == 1) ? "": "winner"}`}>
                <HandIcon value={OtherHand} className="Hand-icon" />
              </div>
            </div>
            {/* 배점 */}
            <div className='App-bet'>
              <span>배점</span>
              <input  type="number" min={1} max={9} value={bet} onChange={handleBetChange} />
              <span>배</span>
            </div>
            {/* 기록 */}
            <div className='App-history'>
              <h2>승부기록</h2>
              <p>{gameHistory.join(", ")}</p>
            </div>
          </div>
        </div>
        <div>
          <HandButton value="rock"  onClick={handleButtonClick}/>
          <HandButton value="scissor" onClick={handleButtonClick}/>
          <HandButton value="paper" onClick={handleButtonClick}/>
        </div>
      </div>
    </>
  );
}

export default App;
