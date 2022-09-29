import {Map} from "../mapfiltros/index"
import * as S from "./styled"
export const Posts = ({posts }) => (
    <S.Posts>
    {posts.map((item) => (
        <Map
            key={item.key}
            cover={item.cover}
            title={item.title} 
            body={item.body}
        />
    ))}
  </S.Posts>
)