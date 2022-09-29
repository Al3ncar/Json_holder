import React from "react"
import * as S from "./style"
import GlobalStyle from "./style";
import Map from "./components/mapfiltros/index"
import { Posts } from "./components/Posts";
import { loadPosts } from "./components/utils/load-posts";
export default class App extends React.Component{
   
  state = { posts:[]}

  async componentDidMount(){
    const PostsAndPhotos = await loadPosts();
    this.setState({posts: PostsAndPhotos})

  }

  loadPosts = async () => {
   
  }
  
  render(){
    const {posts} = this.state
    return(
      <>
        <GlobalStyle />
        <S.Container>
          <Posts posts={posts }/>
        </S.Container>
      </>
    )
  }

}