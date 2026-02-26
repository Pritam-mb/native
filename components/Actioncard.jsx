import { StyleSheet, Text, View, Linking ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Actioncard() {
    function openlink(link) {
        Linking.openURL(link)
    }
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Actioncard</Text>
            <Text style={styles.subtitle}>
                New things are coming soon. Stay tuned!
            </Text>
            <Image
                source={{uri:'https://tse1.mm.bing.net/th/id/OIP.p1vdXSV9VvZxs2gUEsn8SQHaFw?pid=Api&P=0&h=180'}}
                style={styles.image}
            />
            <Text style={styles.footer}>
                namaste apka swagat hai humara iss dharti par. app bohud achha se humara app use kijiye aur apne doston ke sath share kijiye.
            </Text>
            <View style={[{marginTop:10 }, styles.buttons]}>
                <TouchableOpacity
                 onPress={() => openlink('https://www.google.com')}>

                <Text 
                    style={{color:'cyan',fontSize:16,fontWeight:'bold'}}
                   
                    >
                    Click here to know more
                </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#22223b',
        borderRadius: 16,
        padding: 20,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f2e9e4',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#c9ada7',
        marginBottom: 12,
        textAlign: 'center',
    },
    image: {
        width: 280,
        height: 160,
        borderRadius: 12,
        marginBottom: 12,
        resizeMode: 'cover',
    },
    footer: {
        fontSize: 16,
        color: '#9a8c98',
        marginTop: 8,
        textAlign: 'center',
    },
    buttons:{
        borderBlockColor:'cyan',
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:'#393e46',
        padding:10,
        alignItems: 'center',
        borderRadius:10,
    }
})