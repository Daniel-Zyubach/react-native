//описание стилей с помощью стайлд, импорт библиотеки
import styled from "styled-components/native"
//создание компонента стайлд и описание его
const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`
const PostDetails = styled.View`
  justify-content: center;
`
const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`
const PostDate = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`
//создание функционального компонента и передача в параметры пропсов
const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  )
}

export default Post