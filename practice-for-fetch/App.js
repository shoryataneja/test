import React , {useState,useEffect} from 'react'
import {View, Text ,FlatList} from 'react-native' 


export default function App() {

    const [data,setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const j = await res.json()
            setData(j)

            // setData(json)
        } catch (err) {
            console.log(err)
        }
    }

   useEffect(()=>{
    fetchData()
   },[])

   return (
    <View>
        <FlatList
                        data = {data}
                        keyExtractor = {(item)=>item.id.toString()}
                        renderItem = {({item}) => (
                            <Text>{item.body}</Text>
                        )}
        
        >
        </FlatList>
    </View>
   )


}