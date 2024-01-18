import styled from 'styled-components'

function Button({ value }) {
    const Buttonstyle = styled.button`
        background-color: #6750a4;
        border:none;
        color:#fff;
        padding:16px;
        width: ${value}px;
    `;
return <Buttonstyle/>
}

export default Button