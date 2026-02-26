import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white',marginLeft:10}}>Fancycard</Text>
      <View style={[styles.box]}>
        <Image
        style={{borderColor: 'white', height: 200, borderRadius: 10, marginTop: 0}}
        source={{
            uri: 'http://4.bp.blogspot.com/-6Z0-QUmnt7c/UiSlLdUz2AI/AAAAAAAAHQk/Vk-k0-O5f5k/s1600/beautiful-wallpaper-collection-5.jpg'
        }}
        ></Image>
        <Text style={[styles.font,{fontSize:40}]}>Nature</Text>
        <Text style={[styles.font]}>captured by pritam</Text>
        <Text style={[styles.font]}>Price: 400$</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    font:{
        fontSize:16,
        // fontWeight:'bold',
        marginTop:5,
        color:'white',
        marginLeft:10,
        fontFamily:'poppins'
    },
    box:{
        height:340,
        margin:10,
        padding:10,
        backgroundColor: '#020024',
        borderRadius:10,
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
    }
})