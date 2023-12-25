import './App.css';
import Header from './Header';

function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='section'>
        <div className='mbti-options'>
          <div className='mbti-option'>
            <span className='mbti-char'>E</span>
            외향형
          </div>
          <div className='mbti-option'>
            <span className='mbti-char'>I</span>
            내향형
          </div>
        </div>
      </div>
      <div className='section'></div>
      <button className='submit'>컬러등록</button>
    </div>
  );
}

export default App;
