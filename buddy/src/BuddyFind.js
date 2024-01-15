import MapComponent from "./MapComponent"
import styles from "./BuddyFind.module.css"
import beneImg from "./beneImg.png"
function BuddtFind() {
    return (
        <>
        {/* 1번째 div */}
            <div className={styles.bene}>
                <img src={beneImg} />
                <h2 className={styles.title}>버디 찾기</h2>
                <p className={styles.text}>함께 운동할 버디를 찾아보세요!</p>
            </div>


        {/* 2번째 div */}
           <Container>
            
                <div className={styles.btnContainer}>
                    <button className={styles.btnFind}>버디찾기</button>
                    <button className={styles.btnSetting}>나의 설정</button>
                </div>
        {/* 3번째 div */}
                <div className={styles.mapNav}>
                    <select className={styles.sports}>
                        <option>종목</option>
                        <option value="soccer">축구</option>
                        <option value="basketball">농구</option>
                        <option value="runnig">달리기</option>
                    </select>
                    <input />
                    <div className={styles.buddy}>
                        <span className={styles.text}>버디 켜기</span>
                        <div className={styles.toggle}>
                            <div className={styles.circle}>
                            </div>
                        </div>
                    </div>
                </div>
        {/* 4번째 div */}
                <MapComponent />
            </Container>
        </>
    )
}

export default BuddtFind