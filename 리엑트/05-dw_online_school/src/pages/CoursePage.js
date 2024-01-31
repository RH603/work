import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";
import styles from "./CoursePage.module.css";
import getCourseColor from "./../utils/getCourseColor";
import { useEffect, useState } from "react";
import { getDatas, getData, updateDatas } from "../api/FireBase";

function CoursePage() {
  // 링크로 스테이트 받는법
  // const { course } = useLocation().state;
  const props = useLocation();
  // const { course } = props.state;
  const { pathname } = props;
  const [course, setCourse] = useState();
  const navigate = useNavigate();
  const { courseSlug } = useParams();

  // useParams 훅으로 Main.js 에 적어둔 :courseSlug 의 값을 가지고 올수 있다.
  // const props = useParams();
  // console.log(props);
  const courseColor = getCourseColor(course?.code);
  const headerStyle = {
    borderTopColor: courseColor,
  };
  const handleLoad = async () => {
    const result = await getData("coures", "slug", "==", courseSlug);
    setCourse(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  const handleAllWishlistClick = async () => {
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
      const result = await updateDatas("member",member.docId, course, {
        type : "ADD",
        fieldName : "courseList"
      });
      console.log(course)
      if(result) navigate("/wishlist")
    } else {
      alert("로그인해주세요");
      navigate("/login", { state: pathname });
    }
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course?.photoUrl} />
          <h1 className={styles.title}>{course?.title}</h1>
          <Button variant="round" onClick={handleAllWishlistClick}>
            + 코스담기
          </Button>
          <p className={styles.summary}>{course?.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course?.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
