//работа с API
import axios from "axios"

import { View, Alert, FlatList, ActivityIndicator, Text } from "react-native"
import { useState, useEffect } from "react"

import Post from "../components/Post"

const App = () => {
  //оповещение пользователя об загрузке данных
  const [isLoading, setIsLoading] = useState(true)

  //state для хранения статей
  const [items, setItems] = useState()

  //просто делает запрос
  const fetchPosts = () => {
    setIsLoading(true)
    //отправляем запрос
    axios.get('../articles.json')
    //вытаскиваем из axios получаемые данные и помещаем их в setItems
    .then(({ data }) => { setItems(data);
    //если вдруг произойдёт ошибка при получении данных, то
    }).catch((err) => {
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    //когда запрос выполнился или вернул ошибку
    }).finally(() => {
      setIsLoading(false)
    })
  }

  //отправка запроса и проверка при рендеринге
  useEffect(fetchPosts, [])

  //условие для показа индикатора загрузки
  if (isLoading) {
    return <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ActivityIndicator size={"large"} />
      <Text style={{fontSize: 17, fontWeight: 600, marginTop: 15}}>Загрузка...</Text>
    </View>
  }

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