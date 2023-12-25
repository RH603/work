import cancel from "./resources/x.svg"

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-heading'>새 컬러 등록하기</h1>
            <a href='#' className='cancel' >
                <img className='cancel-icon' src={cancel} />
            </a>
        </div>
    )
}

export default Header