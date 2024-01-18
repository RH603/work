import Button from "./Button"
import styles from "./Inquiry.module.css"

function Inquiry() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.InquHeader}>
                    <h2>1:1문의하기</h2>
                </div>
                <div className={styles.page}></div>
                <textarea className={styles.input} ></textarea>
                <Button size="small">보내기</Button>
            </div>
        </>
    )
}

export default Inquiry