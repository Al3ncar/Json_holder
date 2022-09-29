import styled from "styled-components"

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


