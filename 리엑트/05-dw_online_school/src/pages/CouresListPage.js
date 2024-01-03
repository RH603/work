import ListPage from "../components/ListPage";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { getDatas } from "../api/FireBase";
import { useEffect, useState } from "react";
import Warm from "../components/Warn";
import CourseItem from "../components/CourseItem";

let listItems
function CoursListPage() {
  const [items, setitems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isInit, setIsInit] = useState(true)

  const handleKeywordChange = (e) =>{
    // 타이핑 하기 위한 함수
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // includes keyword 가 있는지 확인 하는 함수
    const searchItems = listItems.filter(({title})=> title.includes(keyword))
    setitems(searchItems)
  }


  const handleLoad = async () => {
    const courseItems = await getDatas("coures");
    listItems = courseItems
    setitems(courseItems);
    setIsInit(false)
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <ListPage
        variant="catalog"
        title="모든 코스"
        description="자체 자제된 코스들로 기초를 쌓으세요."
      >
        <form className={searchBarStyles.form} onSubmit={handleSubmit}>
          <input
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="검색으로 코스 찾기"
          />
          <button type="submit">
            <img src={searchIcon} />
          </button>
        </form>
        <p className={styles.count}>총 {items.length}개 코스</p>

        {items.length === 0 && !isInit ? (
          <Warm
            className={styles.emptyList}
            title="조건에 맞는 코스가 없어요"
            description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요"
          />
        ) : (
          <div className={styles.courseList}>
            {items.map((course) => (
              <CourseItem key={course.docId} course={course} />
            ))}
          </div>
        )}
      </ListPage>
    </>
  );
}

export default CoursListPage;
