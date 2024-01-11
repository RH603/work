import mockData from "./mockData.json";

function PostList() {
  return (
    <>
      <ul>
        {mockData.map((item, index) => (
          <li key={index}>{`${item.name}`}</li>
          // 다른 속성도 필요한 경우 추가할 수 있습니다.
        ))}
      </ul>
    </>
  );
}

export default PostList;
