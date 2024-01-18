import bene from "./bene.svg"
import styles from "./Manager.module.css"
import Button from './Button';
import styled from "styled-components";

function Manager() {

    const SelectBtn = styled(Button)`
    width: 223px;
    height: 40px;
    border-radius: 999px;
    background-color: red;

    `


    return (


        <>
            <div className={styles.bene}>
                <h2 className={styles.title}>관리자</h2>
                {/* <p className={styles.text}>나의 정보를 확인해 보세요!</p> */}
            </div>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div>
                        <SelectBtn>회원관리</SelectBtn>
                        <SelectBtn>신고관리</SelectBtn>
                    </div>
                    <input />

                </div>
                <div></div>
            </div>
        </>


    )
}

export default Manager