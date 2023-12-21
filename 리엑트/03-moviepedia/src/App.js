import "./App.css";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";
import { useEffect, useState } from "react";
import { getDatas, reviews, addDatas, deleteDatas,updateDatas } from "./fireBase";
import "./components/ReviewForm.css";
// blob = 데이터 값이 큰 것을 담을수 있다
const LIMIT = 5;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [hasNext, setHasNext] = useState(false);

  // sort 함수에 아무런 아규먼트(arguments)도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬 된다.
  // ==> compareFunction가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드값 순서대로 정렬된다는 의미이다.
  // 그렇기  때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않는다
  // items.sort((a, b)=>{
  //  반환값 < 0 : a가 b보다 앞에 있어야 한다
  //  반환값 == 0 : a와 b 순서를 바꾸지 않는다
  //  반환값 > 0 : b가 a보다 앞에 있어야 한다
  //  a - b : 오름차순 b - a : 내림차순
  //   [1,2,3,4,5,6,7,8]
  // });
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  // console.log(items);
  const handleDeleate = async (docId,imgUrl) => {
    // alert(id);
    // items 에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거
    // const nextItems = items.filter((item) => {
    //   return item.id !== id;
    // });
    // setItems(nextItems);

    // db에서 데이터 삭제
    const result = await deleteDatas("movie", docId, imgUrl)
    if(!result) return //db 에서 삭제가 성공했을 때만 그 결과를 화면에 반영한다.  

    // items 셋팅
    setItems((prevItems) => prevItems.filter((item) => item.docId !== docId));
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getDatas("movie", options);
    } catch (error) {
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      // finally = 생략 가능, try에 오류가 있거나 없거나 무조건 실행 됨
      setIsLoading(false);
    }
    const { reviews, lastQuery } = result;

    if (options.lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setLq(lastQuery);
    setHasNext(lastQuery);
  };

  const handleLoadMore = () => {
    handleLoad({ lq, order, limit: LIMIT });
  };

  const handleAddSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  useEffect(() => {
    // useEffect 는 arguments 로 콜백 함수와 배열을 넘겨준다
    // [] 은 dependency list 라고 하는데 위에서 handelLoad 함수가 무한루프 작동을 하기 때문에 처리를 해줘야 하는데
    // 리엑트 [] 안에 있는 값들을 앞에서 기억한 값이랑 비교한다.
    // 비교 해서 다른경우에만 콜백함수를 실행한다. (그 전에는 콜백함수를 등록만 해놓음)
    handleLoad({ order, lq: undefined, limit: LIMIT });
    // options 의 시작
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm onSubmitSuccess={handleAddSuccess} onSubmit={addDatas} />
      <ReviewList items={items} onDelete={handleDeleate} onUpdate={updateDatas} />
      {
        // {}안에는 표현식만 올수있다.
        // if문은 올 수 없다 하지만 삼항 연산자는 올 수 있다
        // loadingError !== null ? <span>{loadingError.message}</span> : "";

        // 에러가 있을 시 나타낼 요소, 텍스트를 출력

        loadingError?.message && <span>{loadingError.message}</span>
        // ?. = optinal 체이닝 ?.에는 null 혹은 Error 객채가 담김
        // loadingError가 존재 할때만 ?.message를 참조한다( 프로퍼티를 꺼낸다)

        // 조건부 연산자
        // AND : 앞에 나오는 값이 true 이면 뒤쪽 랜더링 = &&
        // OR : 앞에 나오는 값이 false 이면 뒤쪽 랜더링 = ||

        // true = truthy  false = falsy
        // falsy = null, NaN, 0, 빈 문자열 , undefinded 이외는 다 = truthy
      }
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </div>
  );
}

export default App;
