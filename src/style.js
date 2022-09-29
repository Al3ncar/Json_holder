import { createGlobalStyle } from 'styled-components';
 import styled from 'styled-components';
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
