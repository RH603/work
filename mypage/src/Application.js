import styles from "./Application.module.css"
import profileIcon from "./profile.svg"
import MypageProfile from "./MypageProfile";
import MypageDeli from "./MypageDeli";
import food from "./Rectangle 37.svg"
import Button from "./Button";
import styled from "styled-components";

function Application() {
    const SelectBtn = styled(Button)`
        background-color: #1e326d;
        color:#fff;
        margin: 0 auto 100px;
        font-size: 24px;
    `
    return (
        <>
            <div className={styles.container}>
                <div className={styles.appl}>
                    <h2>교환/반품 신청</h2>
                </div>
                <p className={styles.itemInfo}>상품정보</p>
                <div>
                    <ul className={styles.itemMenu}>
                        <li>주문일자</li>
                        <li>상품정보</li>
                        <li>수량</li>
                        <li>상품구매금액</li>
                        <li>주문처리상태</li>
                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.date}>2023.01.12 <input type="checkbox" /></li>
                        <li className={styles.itemsInfo}>
                            <img src={food} />
                            <p>프로틴쉐이크</p>
                        </li>
                        <li>1</li>
                        <li>30.000원</li>
                        <li>배송중</li>
                    </ul>
                    <ul className={styles.items}>
                        <li className={styles.date}>2023.01.12 <input type="checkbox" /></li>
                        <li className={styles.itemsInfo}>
                            <img src={food} />
                            <p>프로틴쉐이크</p>
                        </li>
                        <li>1</li>
                        <li>30.000원</li>
                        <li>배송중</li>
                    </ul>
                </div>
                <div className={styles.border}></div>
                <p className={styles.itemInfo}>교환 사유</p>
                <div className={styles.changeContainer}>
                    <div className={styles.changeWrap}>
                        <div className={styles.cho}>사유선택</div>
                        <div className={styles.inputBox}>
                            <input className={styles.dec} />
                            <div className={styles.selectBox}>
                                <select className={styles.select}>
                                    <option>-선택하세요</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.changeWrap}>
                        <div className={styles.cho}>상세사유</div>
                        <div className={styles.inputBox}>
                            <input className={styles.dec2} />
                        </div>
                    </div>
                    <div className={styles.changeWrap}>
                        <div className={styles.cho}>환불계좌</div>
                        <div className={styles.inputBox}>
                            <input className={styles.dec3} />
                            <div className={styles.selectBox}>
                                <select className={styles.ref}>
                                    <option>선택</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.btn}>
                    <SelectBtn size="medium" round>교환/반품 신청</SelectBtn>
                </div>
            </div>
        </>
    )
}

export default Application