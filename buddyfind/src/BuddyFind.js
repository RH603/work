import MapComponent from "./MapComponent"

function BuddtFind() {
    return (
        <>
            <div className="beneContainer">
                <h2>버디 찾기</h2>
                <p>함께 운동할 버디를 찾아보세요!</p>
            </div>
            <div>
                <button>버디찾기</button>
                <button>나의 설정</button>
            </div>
            <div>
                <select>
                    <option>종목</option>
                    <option value="soccer">축구</option>
                    <option value="basketball">농구</option>
                    <option value="runnig">달리기</option>
                </select>
                <input />
                <div><span>버디 켜기</span><div>toggle</div></div>
            </div>
            <MapComponent/>
        </>
    )
}

export default BuddtFind