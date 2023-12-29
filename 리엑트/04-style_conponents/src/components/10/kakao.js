import styled from "styled-components";
import Input from "./Input";
import Link from "./Link";
import Button from "./Button";
import KakaoButton from "./KakaoButton";
import Label from "./Label";

const Logo = styled.h1`
  font-size: 36px;
  text-align: center;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color:transparent;
`;

const Description = styled.div`
  font-size: 16px;
  margin-top: 24px;
  text-align: center;

`;

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
`;


function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요?<Link href="#">회원가입 하기</Link>
      </Description>
      <from>
        <Label htmlFor="mail">이메일</Label>
        <Input id="mail" type="e-mail" placeholder="google.com" />
        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" type="password" placeholder="비밀번호" />
        <Button type="submit">로그인 하기</Button>
      </from>
      <KakaoButton></KakaoButton>
    </Container>
  );
}

export default Login;
