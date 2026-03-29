import React , {useState} from "react";
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';

export default function App() {

  const [count,setCount] = useState(0)
  const inc = () => {
    setCount(prev => prev+1)                
  }
  const dec = () => {
    if (count > 0) {
    setCount(prev => prev-1)
    }
  }

  const red = () => {
    setCount(0)
  }

  return (
    <View style = {style.container}>
      <Text>COUNTER APP</Text>
      <Text>Count : {count}</Text>
      <Button title = 'Inc' onPress={inc} />
      <Button title = 'Dec' onPress={dec} />
       <Button title = 'Reset' onPress={red} />
    </View>
  )
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
