import styled from "styled-components";
import icon from "./search.png";
import Input from "./Input";


const SearchInput = styled(Input)`
    background-image: url("${icon}");
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 12px 50%;
    padding-left: 40px;
`;




export default SearchInput;
