import bene from "./bene.svg"
import styles from "./Manager.module.css"
import Button from './Button';
import styled from "styled-components";
import { useState } from "react";
import user from "./user.svg"
import vector from "./Vector.svg"

function Manager() {
    const [selectedButton, setSelectedButton] = useState("manager")

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const SelectBtn = styled(Button)`
       background-color: ${({ selected }) => (selected ? "#1e326d" : "#fff")};
    color: ${({ selected }) => (selected ? "#fff" : "#000")};
    width: 223px;
    height: 40px;
    border-radius: 999px;
    `

    const DelectBtn = styled(Button)`
        background-color: #fff;
        color:red;
        width: 98px;
        height: 40px;
        border-radius: 999px;
        font-size: 16px;
    `

    return (
        <>
            <div className={styles.nav}></div>
            <div className={styles.bene}>
                <h2 className={styles.title}>관리자</h2>
                {/* <p className={styles.text}>나의 정보를 확인해 보세요!</p> */}
            </div>
            <div className={styles.back}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <div className={styles.btns}>
                            <SelectBtn
                                onClick={() => handleButtonClick("manager")}
                                selected={selectedButton === "manager"}>
                                회원관리</SelectBtn>
                            <SelectBtn
                                onClick={() => handleButtonClick("Declaration")}
                                selected={selectedButton === "Declaration"}
                            >신고관리</SelectBtn>
                        </div>
                        <input className={styles.input} />
                        <div className={styles.userBox}>
                            <div className={styles.user}>
                                <img src={user} />
                                <p className={styles.name}>홍길동</p>
                                <img src={vector} className={styles.icon} />
                                <p className={styles.text}>게시물보기</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.info}>
                            <div class={styles.userText}>회원정보</div>
                            <DelectBtn>회원삭제</DelectBtn>
                        </div>
                        <div className={styles.flex}>
                            <div>
                                <div className={styles.userId}>
                                    <p>이름</p>
                                    <p>홍길동</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>닉네임</p>
                                    <p>동에번쩍서에번쩍</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>성별</p>
                                    <p>남/여</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>이메일</p>
                                    <p>ㅁㅁㅁ@ㅁㅁㅁㅁ</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>비밀번호</p>
                                    <p>ㅁㅁㅁ123!!!</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>전화번호</p>
                                    <p>010-0000-0000</p>
                                </div>
                                <div className={styles.userId}>
                                    <p>주소</p>
                                    <p>대전광역시 중구 중앙로121번길 20</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.userDate}>
                                    <p>가입일</p>
                                    <p>2024.01.01</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>댓글작성수</p>
                                    <p>265개</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>상품후기</p>
                                    <p>16개</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>구매량</p>
                                    <p>20개</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>문의</p>
                                    <p>5회</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>포인트</p>
                                    <p>1600 p</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>경고횟수</p>
                                    <p>1회</p>
                                </div>
                                <div className={styles.userDate}>
                                    <p>버디이용건수</p>
                                    <p>16회</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.corr}>
                            <Button size="small" round>수정</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Manager