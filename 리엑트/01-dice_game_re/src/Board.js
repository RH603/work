import Dice from "./Dice"

function Board({ name, color, gameHistory }) {


  const sum = gameHistory.reduce((a, b) => a + b)
  const num = gameHistory[gameHistory.length - 1]
  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  )
}

export default Board