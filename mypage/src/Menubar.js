import styles from "./Mypage.module.css"
import user from "./user.svg"
import profileIcon from "./profile.svg"
import MypageProfile from "./MypageProfile";
import MypageDeli from "./MypageDeli";

function Menuber() {
    return (
        <>
            <div className={styles.menuBar}>
                <div className={styles.userInfo}>
                    <img src={user} />
                    <div className={styles.info}>
                        <p>내정보</p>
                        <p>프로필 수정</p>
                        <p>비밀번호 변경</p>
                    </div>
                </div>
                <div className={styles.userInfo}>
                    <img src={user} />
                    <div className={styles.info}>
                        <p>배송</p>
                        <p>배송 조회</p>
                        <p>교환 환불</p>
                        <p>주문내역</p>
                    </div>
                </div>
                <div className={styles.userInfo}>
                    <img src={user} />
                    <div className={styles.info}>
                        <p>고객센터</p>
                        <p>1:1 문의하기</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menuber