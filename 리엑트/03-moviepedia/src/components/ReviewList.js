import "./ReviewList.css";

function ReviewListItem({ item, onDelete }) {
  const handleDelecteClick = () => onDelete(item.id);

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{item.createdAt}</p>
        <p>{item.content}</p>
        <button onClick={handleDelecteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete}) {
    const onDelelet = () => onDelelet(
    
        );
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
