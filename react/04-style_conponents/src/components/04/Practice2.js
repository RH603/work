import Input from "./Input"
import styled from "styled-components"

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
`


function Practice2(){
    return(
        <Container>
            <h1>로그인</h1>
            <p>Email</p>
            <Input />
            <p>password</p>
            <Input/>
        </Container>
    )
}

export default Practice2