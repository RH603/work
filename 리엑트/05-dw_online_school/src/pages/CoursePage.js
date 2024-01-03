import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import Button from "./../components/Button";

function CoursePage() {
  // 링크로 스테이트 받는법
  const { course } = useLocation().state;

  // useParams 훅으로 Main.js 에 적어둔 :courseSlug 의 값을 가지고 올수 있다.
  const props = useParams();
  console.log(props);

  return (
    <>
      <div>
        <Container>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1>{course.title}</h1>
          <Button variant="round">+ 코스담기</Button>
          <p>{course.summary}</p>
        </Container>
      </div>
      <Container>
        {course.topics.map(({ topic }) => (
          <Card key={topic.slug}>
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
