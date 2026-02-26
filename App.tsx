import { View, Text, SafeAreaView, ScrollView, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elevetdcards from './components/Elevetdcards';
import Fancycards from './components/Fancycard';
import Actioncard from './components/Actioncard';
import Contact from './components/Contact'
const App = () => {
  const arrey = ['red','blue','green','yellow','black'];
   const isdark = useColorScheme() === 'light'; //

  const styles = StyleSheet.create({
    font:{
      fontSize:25,
      fontWeight:'600',
      marginTop:30,
      color: isdark ? 'white' : 'black'
    },
    container:{
      flex:1,
      backgroundColor: '#000',
      
      // backgroundColor: isdark ? 'black' : 'white',
      
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.font}>Flat Cards</Text>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          style={{marginVertical: 10}}
        >
        {arrey.map((color, index) => (
          <Flatcard key={index} color={color} />
        ))}
        </ScrollView>
        <Elevetdcards/>
        <Fancycards/>
        <Actioncard/>
        <Contact/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App