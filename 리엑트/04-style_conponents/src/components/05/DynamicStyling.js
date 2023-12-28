import styled from "styled-components";
import Button from "./Button";

// HTML 태그의 속성들은 표준속성과 비표준속성으로 나뉜다
// 비표준 속성값앞에 $를 붙인다.

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

function DynamickStyling() {
  return (
    <Container>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근 버튼</h1>
      <Button size="small" $round>
        round small
      </Button>
      <Button size="medium" $round>
        round medium
      </Button>
      <Button size="large" $round>
        round large
      </Button>
    </Container>
  );
}

export default DynamickStyling;
