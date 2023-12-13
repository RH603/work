import items from "./components/mock.json";
import "./App.css";
import ReviewList from "./components/ReviewList";

function App() {
  // console.log(items);
  const handleDeleate =(id) =>{
    alert(id)
  }
  return (
    <div>
      <ReviewList items={items} onDelete={handleDeleate}/>
    </div>
  );
}

export default App;
