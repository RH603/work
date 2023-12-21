import arrow from "../resources/img/arrow.svg"
import "./Content.css"

const Content = () =>{
    return(
        <div className='content'>
        <a className='add-item' href="#">새 컬러 등록하기</a>
        <ul className='items'>
          <li className='item'>
            <div className='item-id'>1</div>
            <div className='item-mbti'>ENFP</div>
            <div className='item-arrow'>
              <img
                className='item-arrow-icon'
                src={arrow}
                alt='화살표'
              />
            </div>
            <div className='item-color-chip' style={{backgroundColor : "#AACCEE"}}></div> 
            <div className='item-color-code'>#AACCEE</div> 
          </li>
        </ul>
      </div>
    )
}

export default Content