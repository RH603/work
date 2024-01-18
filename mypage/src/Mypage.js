import styles from "./Mypage.module.css"
import user from "./user.svg"
import profileIcon from "./profile.svg"
import Button from './Button';
import styled from "styled-components";
import MypageProfile from "./MypageProfile";
import MypageDeli from "./MypageDeli";
import Menuber from "./Menubar";
import Application from "./Application";
import Inquiry from './Inquiry';
function Mypage() {

    const SelectBtn = styled(Button)`
  background-color: #1e326d;
  color:#fff;
  margin: 0 auto;
`

    return (
        <>
            <div className={styles.bene}>
                {/* <img src={beneImg} /> */}
                <h2 className={styles.title}>마이페이지</h2>
                <p className={styles.text}>나의 정보를 확인해 보세요!</p>
            </div>
            {/* 1번재 div */}
            <div className={styles.profileContainer}>
                <Menuber/>
                <Inquiry/>
                {/* <MypageProfile/> */}
                {/* <MypageDeli/> */}
                {/* <Application /> */}
            </div>
        </>
    )
}

export default Mypage