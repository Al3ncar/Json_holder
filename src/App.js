import React from "react"
import * as S from "./style"
import GlobalStyle from "./style";


export default class App extends React.Component{
  state={
    posts:[]
  }
  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const PostsGet = fetch("https://jsonplaceholder.typicode.com/posts");
    const [posts] = await Promise.all([PostsGet]);
    const PostsJson = await posts.json();
    this.setState({posts: PostsJson})
  }
  
  render(){
    const {posts} = this.state
    return(
      <>
      <GlobalStyle />
        <div>
          {posts.map((item) => (
            <S.Poster key={item.key} >
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </S.Poster>
          ))}
        </div>
      </>
    )
  }

}