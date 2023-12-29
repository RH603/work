import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { useState, useEffect } from "react";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    // 버블링 현상을 막아준다 stopPropagation
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);

    window.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>위시리스트</li>
          <li className={styles.disabled}>회원가입</li>
          <li>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
