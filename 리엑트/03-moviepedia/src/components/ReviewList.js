import { useState } from "react";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";

function formatDate(value) {
  const date = new Date(value);
  // console.log(date);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const handleDelecteClick = () => onDelete(item.docId, item.imgUrl);
  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDelecteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  // console.log(editingId)
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content, imgUrl,docId } = item;
          const initialValues = { title, rating, content, imgUrl: null };

          const handleCancel = () => setEditingId(null);
          // collectionName, formData 받아 오는곳은 ReviewForm에 try 의const { review } = await onSubmit("movie", values);  의 onSubmit
          const handleSubmit = (collectionName, formData) => {
            onUpdate(collectionName, formData, docId, imgUrl);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialPreview={imgUrl}
                initialValues={initialValues}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
              />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
