import * as S from "./styled"

export const Map = ({key, cover, title, body}) =>{
    return(
        <>
            <S.Post key={key} >
                <img src={cover} alt={title}/>
                <S.PostCont>
                  <h1>{title}</h1>
                  <p>{body}</p>
                </S.PostCont>
            </S.Post>
        </>
    )
}

