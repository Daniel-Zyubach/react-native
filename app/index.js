import { View } from "react-native"

import Post from "../components/Post"

const App = () => {
  return (
    <View>
      <Post
        imageUrl={'https://f.simpleminecraft.ru/uploads/monthly_2019_04/image.png.554f935594b690973e886d83182b2de6.png'}
        title={'Тестовая статья'}
        createdAt={'11/22/33'}
      />
    </View>
  )
}

export default App