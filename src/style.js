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


export const Poster = styled.div`
    display:grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
`
