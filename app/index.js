//работа с API
import axios from "axios"

import { View, Alert, FlatList } from "react-native"
import { useState, useEffect } from "react"

import Post from "../components/Post"

const App = () => {
  //state для хранения статей
  const [items, setItems] = useState()
  //отправка запроса и проверка при рендеринге
  useEffect(() => {
    //отправляем запрос
    axios.get('../articles.json')
    //вытаскиваем из axios получаемые данные и помещаем их в setItems
    .then(({ data }) => { setItems(data);
    //если вдруг произойдёт ошибка при получении данных, то
    }).catch((err) => {
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    })
  }, [])

  return (
    <View>
      <FlatList
        data={items}
        renderItem={
          ({ item }) => <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl}/>
        }
      />
    </View>
  )
}

export default App