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
    const postsGet = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")
    const [posts,photos] = await Promise.all([postsGet, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const PostsAndPhotos = postsJson.map((posts,index)=> {
      return {...posts, cover: photosJson[index].url}
    })
    this.setState({posts: PostsAndPhotos})
  }
  
  render(){
    const {posts} = this.state
    return(
      <>
      <GlobalStyle />
      <S.Container>
        
          <S.Posts>
            {posts.map((item) => (
              <S.Post key={item.key} >
                <img src={item.cover} alt={item.title}/>
                <S.PostCont>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </S.PostCont>
              </S.Post>
            ))}
          </S.Posts>
      </S.Container>
      </>
    )
  }

}