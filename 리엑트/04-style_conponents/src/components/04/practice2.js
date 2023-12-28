import Flex from "./Flex";
import Input from "./Input";

// const Container = style.div`
// margin:0 atuo;
// width: 400px;
// &{Input}{
//   display:useBlock;
//   width: 100%;
//  margin: 8px 0 16px
//  box-sizing : border-box;
// }
// `;

function Practice2() {
  return (
    <Flex>
      <h1>로그인</h1>
      <label htmlFor="mail">Email</label>
      <Input id="mail" type="e-mail" placeholder="google.com" />
      <label htmlFor="password">PassWord</label>
      <Input id="password" type="password" placeholder="비밀번호" />
    </Flex>
  );
}

export default Practice2;
