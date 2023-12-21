import remove from "../resources/img/x.svg"
import "./HeaderContainer.css"

const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <h1>MBTI별<br /><span className='accent'>좋아하는 컬러</span></h1>
                <div>
                    <span className='filter'>
                        <span>INTJ</span>
                        <img className='remove-icon' src={remove} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer