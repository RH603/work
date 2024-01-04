import { Link } from "react-router-dom";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { useState, useEffect } from "react";
import { useMember } from "../contexts/MemberContext";

function UserMenu() {
  const member = useMember();
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = (e) => {
    // 버블링 현상을 막아준다 stopPropagation
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = () => setIsOpen(false);

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/wishlist">
            <li>위시리스트</li>
          </Link>
          <li className={styles.disabled}>회원가입</li>
          <Link to="/login">
            <li>
              {member ? "로그인":"로그인"}
              </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
