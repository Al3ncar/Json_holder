export const loadPosts =  async() => {
    const postsGet = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")
    const [posts,photos] = await Promise.all([postsGet, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const PostsAndPhotos = postsJson.map((posts,index)=> {
      return {...posts, cover: photosJson[index].url}
    })
    return PostsAndPhotos
}