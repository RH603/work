// import './App.css';
import dog1 from "./img/dog1.jpg"
import "./App.css"
function App() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-img">
          <img src={dog1} />
        </div>
        <h1>Hello</h1>
        <p>Lorem ipsum</p>
        <span className="badge">Admin</span>
        <ul>
          <li>Email</li>
          <li>Call</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
