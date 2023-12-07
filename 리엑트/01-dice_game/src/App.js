

import logo  from "./assets/logo.png"
import Board from "./Board";
// 함수형 컴포넌트 : 컴포넌트를 함수형으로 만든것(번수형으로도 만들수 있음)
//      함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 반드시 대문자여야 한다.
//      함수형 컴포넌트 안에서는 JSX 문법으로 만든 리엑트 엘리먼트를 리턴해줘야 한다.
function App(props){
    console.log(props.productName, props.productPrice)
    return( 
        <div>
            <div>
                <img src={logo}/>
                <h1>주사위게임</h1>
                <div>
                    <button>던진다</button>
                    <button>처음부터</button>
                </div>
            </div>
            <div>
                <Board name="나" color="blue"/>
                <Board name="상대" color="red"/>
            </div>
        </div>
    )
}

export default App;