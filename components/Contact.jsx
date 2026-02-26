import { StyleSheet, Text, View , ScrollView , Image} from 'react-native'
import React from 'react'

export default function Contact() {
    const contacts =[
        {
            uid : 1,
            name:"pritam patra",
            email: "pritampatra@example.com",
            imgurl: "https://instagram.fccu27-1.fna.fbcdn.net/v/t51.82787-15/642124692_17988210959935986_5884335792947051018_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDIxLmMyIn0&_nc_ht=instagram.fccu27-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QF138gBz1_esQGQhSekuIP4LDhzWTpOlxohTa1zhMHheD_buvh90azxwI3opJcrdN4ED9_ab2QUwsqbZtW1DUk7&_nc_ohc=0mtsEoza61MQ7kNvwFlUvlw&_nc_gid=DVnr-VFFTDHFP3bSa_p-Zg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfvPsgTmChuwpKqCk6tBLgrxIMrOAtOhHe3Zqqda5k3jYg&oe=69A68988&_nc_sid=7a9f4b"
        },
           {
            uid : 2,
            name:"punch monkey",
            email: "rohanteja@example.com",
            imgurl: "https://tse3.mm.bing.net/th?id=OIF.QTJhJZbTz%2fJWC2RL4URYEg&pid=Api&P=0&h=180"
        },
        {
            uid : 3,
            name:"narendra modi",
            email: "narendramodi@example.com",
            imgurl: "https://img.freepik.com/premium-photo/prime-minister-india-narendra-modi_635702-4249.jpg"
        },
           {
            uid : 4,
            name:"Lociento wilson",
            email: "mamtabanerjee@example.com",
            imgurl: "https://tse2.mm.bing.net/th/id/OIP.2sVBZr-em5-l6Q4vc0HL6gHaKX?pid=Api&P=0&h=180"
        }
    ]


  return (
    <View>
      <Text style={styles.heading}>Mentors</Text>
      <ScrollView
        horizontal={false}
        style={styles.container}
      >
        {contacts.map((e)=>
          <View key={e.uid} style={styles.box}>
            <Image
              style={styles.pic}
              source={{uri: e.imgurl}}
            />
            <View style={{ gap:3, justifyContent: "left", alignItems: "left"}}>

            <Text style={styles.title}>{e.name}</Text>
            <Text style={styles.title}>{e.email}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        // paddingHorizontal: 8
    },
    pic:{
        height: 100,
        width: 100,
        borderRadius: 50
    },
    title:{
        color: "white",
        textAlign: 'left'
    },
    box:{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        backgroundColor: '#22223b',
        width: 300,
        padding: 16,
        borderRadius: 12,
    },
    container:{
        paddingHorizontal: 50,
        // gap: 20

    }
})