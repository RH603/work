import styles from "./Mypage.module.css"
import styled from "styled-components";
import Button from './Button';
import profileIcon from "./profile.svg"

function MypageProfile() {

    const SelectBtn = styled(Button)`
    background-color: #1e326d;
    color:#fff;
    margin: 0 auto;
  `

    return (
        <>
            <div className={styles.profile}>
                <div className={styles.box}>
                    <div className={styles.change}>
                        <h2>프로필 변경</h2>
                        <div className={styles.profileChange}>
                            <img src={profileIcon} />
                            <div className={styles.btns}>
                                <Button size="big">사진변경하기</Button>
                                <Button size="big">기본사진으로 변경</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adr}>
                        <h2>주소변경</h2>
                        <div className={styles.inputBox}>
                            <input className={styles.input} />
                            <input className={styles.input} />
                        </div>
                        <SelectBtn size="big">프로필 변경하기</SelectBtn>
                    </div>
                    {/* 프로필 변경 */}
                </div>
                <div className={styles.box2}>
                    <h2>비밀번호 변경</h2>
                    <div className={styles.changeBtn}>
                        <p>현재 비밀번호</p>
                        <input className={styles.input} placeholder="비밀번호는 8자리 이상으로 대/소문자+숫자+특수문자로 조합해주세요" />
                    </div>
                    <div className={styles.changeBtn}>
                        <p>새로운 비밀번호</p>
                        <input className={styles.input} placeholder="비밀번호는 8자리 이상으로 대/소문자+숫자+특수문자로 조합해주세요" />
                        <p>비밀번호 확인</p>
                        <input className={styles.input} placeholder="비밀번호는 8자리 이상으로 대/소문자+숫자+특수문자로 조합해주세요" />
                    </div>
                </div>
                <div className={styles.pwBtn}>
                    <SelectBtn size="big">비밀번호 변경하기</SelectBtn>
                </div>
            </div>
        </>
    )
}

export default MypageProfile