import React , {useState,useEffect} from 'react'
import {View, Text , ScrollView} from 'react-native' 


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
    <ScrollView style = {{padding : 20 }}>
        {data.slice(0,10).map((item) => (
  <Text key={item.id} style={{ marginBottom: 10 }}>
    {item.title}
  </Text>
))}
    </ScrollView>
   )
}