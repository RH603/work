
import Button from "./Button"
import styles from "./MypageDeli.module.css"
import item from "./Rectangle 37.svg"


function MypageDeli() {
    return (
        <>
            <div className={styles.deliContainer}>
                <div className={styles.box}>
                    <div className={styles.deli}>
                        <h2>배송/교환</h2>
                    </div>
                    <div className={styles.boxContainer}>
                        <div className={styles.border}>
                            <h1 className={styles.date}>2023.01.12</h1>
                            <p className={styles.text}>주문처리완료</p>
                            <div className={styles.itemContainer}>
                                <div className={styles.items}>
                                    <div className={styles.itemBox}>
                                        <div className={styles.itemImage}>
                                            <img src={item} />
                                        </div>
                                        <div>
                                            <p>제품명</p>
                                            <p>30.000원</p>
                                        </div>
                                    </div>
                                    <div className={styles.itemBox}>
                                        <div className={styles.itemImage}>
                                            <img src={item} />
                                        </div>
                                        <div>
                                            <p>제품명</p>
                                            <p>30.000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button>교환/반품 신청</Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.border}>
                            <h1 className={styles.date}>2023.01.11</h1>
                            <p className={styles.text}>배송중</p>
                            <div className={styles.itemContainer}>
                                <div className={styles.items}>
                                    <div className={styles.itemBox}>
                                        <div className={styles.itemImage}>
                                            <img src={item} />
                                        </div>
                                        <div>
                                            <p>제품명</p>
                                            <p>30.000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button>교환/반품 신청</Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.border}>
                            <h1 className={styles.date}>2023.01.10</h1>
                            <p className={styles.text}>배송완료</p>
                            <div className={styles.itemContainer}>
                                <div className={styles.items}>
                                    <div className={styles.itemBox}>
                                        <div className={styles.itemImage}>
                                            <img src={item} />
                                        </div>
                                        <div>
                                            <p>제품명</p>
                                            <p>30.000원</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button>교환/반품 신청</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.deli}>
                    <h2 className={styles.histortHeader}>주문내역</h2>
                </div>
                <div className={styles.history}>
                    <div className={styles.historyInfo}>
                        <p>주문내역</p>
                        <p>제품명</p>
                        <p>결제금액</p>
                    </div>
                    <div className={styles.historyItem}>
                        <p>주문 내역이 없습니다</p>
                    </div>
                    <div className={styles.historyItems}>
                        <div className={styles.historyNum}>
                            <p>2024-01-xx</p>
                            <p>프로틴쉐이크</p>
                            <p>30.000원</p>
                        </div>
                        <div className={styles.historyNum}>
                            <p>2024-01-xx</p>
                            <p>프로틴쉐이크</p>
                            <p>30.000원</p>
                        </div>
                        <div className={styles.historyNum}>
                            <p>2024-01-xx</p>
                            <p>프로틴쉐이크</p>
                            <p>30.000원</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageDeli