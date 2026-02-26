import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type FlatcardProps = {
  color: string;
}

const Flatcard = ({ color }: FlatcardProps) => {
  return (
    <View>
      {/* <Text>Flatcard hello</Text> */}
      <View style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.font}>{color}</Text>
      </View>
    </View>
  )
}
export default Flatcard;
const styles = StyleSheet.create({
  box:{
    width:70,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderRadius:10,
    marginLeft:10,
    elevation:8,
  },
  font:{
    fontSize:16,
    fontWeight:'600',
    color:'white'
  }
})
