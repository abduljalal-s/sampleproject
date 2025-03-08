import { Stack } from "expo-router";

const  RootLayout = () => {
  return <Stack 
  screenOptions={{   
    headerStyle:{
      background: "#ff8c00",
    },
    headerTintColor:"#FFF",
    headerTitleStyle:{
      fontSize:20,
      fontWeight:'bold',
    },
    contentStyle:{
      paddingHorizontal:10,
      paddingTop:10,
      backgroundColor:'#fff',
    },
}}>
  <Stack.Screen name="index" options={{title:'Home'}} />
  <Stack.Screen name="notes" options={{headerTitle:'notes'}} />
</Stack>
  
};

export default RootLayout