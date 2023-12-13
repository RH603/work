const WINS = {
    rock : "scissor",
    scissor : "paper",
    paper : "rock",
}

function random(n) {
  return Math.ceil(Math.random() * n);
}

export function generateRandomHand() {
  const num = random(3);
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "scissor";
  } else {
    return "paper";
  }
}


export function compareHand(a, b){
    // 승리 ==> 1, 패배 ==> -1, 무승부 ==> 0 
    // 내가 이길때
    if(WINS[a] === b)return 1
    // 상대가 이길때
    if(WINS[b] === a)return -1
    // 무승부 일때
    return 0;
}

// 