import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
`;
export default GlobalStyle;

export const Container = styled.div`
  min-height:100vh;
  background:#eee;
  padding:30px;
`

export const Posts = styled.div`
    display:grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 2fr));
    gap:30px;
`

export const Post = styled.div`
  background-color:#fff;
  box-shadow:0 0 10px rgba(0,0,0, 0.1);
  transition: transform 100ms ease-in-out;
  img{
    max-width:100%;
  }
  &:hover{
    transform:scale(1.05)
  }
`
export const PostCont = styled.div`
  padding:30px;
`


