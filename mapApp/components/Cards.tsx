import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { OpenSans_600SemiBold } from '@expo-google-fonts/open-sans/600SemiBold';
import { OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans/800ExtraBold';
import { OpenSans_500Medium } from '@expo-google-fonts/open-sans/500Medium';

var cardHeight = 150
var cardWidth = 170

export default function Cards() {
  return (
    <View style={{ marginTop: -cardHeight - 10 }}>
      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card,styles.boxWithShadow]}>
          <View style={styles.top}>
            <Image style={styles.img} source={require('../assets/images/chipotle.webp')} />
            <View>
              <Text style={styles.txt}>CHIPOTLE</Text>
              <Text style={styles.subtxt}>Burritos</Text>
            </View>
          </View>
          <View>
              <View style={styles.top}>
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />

              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
          </View>
        </View>

        
        <View style={[styles.card,styles.boxWithShadow]}>
          <View style={styles.top}>
            <Image style={styles.img} source={require('../assets/images/burger.png')} />
            <View>
              <Text style={styles.txt}>McDonalds</Text>
              <Text style={styles.subtxt}>Burgers</Text>
            </View>
          </View>
          <View>
              <View style={styles.top}>
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />

              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
          </View>
        </View>


        <View style={[styles.card,styles.boxWithShadow]}>
          <View style={styles.top}>
            <Image style={styles.img} source={require('../assets/images/icecream.png')} />
            <View>
              <Text style={styles.txt}>SALT & S...</Text>
              <Text style={styles.subtxt}>Ice Cream</Text>
            </View>
          </View>
          <View>
              <View style={styles.top}>
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />
                <Image style={styles.friendimg} source={require('../assets/images/pfp.png')} />

              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
          </View>
        </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  friendimg: {
    marginLeft: 4,
    width:25,
    height:25,
    borderRadius: '50%',
    margin: 3
  },

  subtxt: {
    marginLeft: 4,
    fontFamily: "OpenSans_500Medium",
    fontSize: 14
  },

  container: {
    padding: 8,
    height: cardHeight
  },

  txt: {
    marginLeft: 4,
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 14

  },

  card: {
    flex: 1,
    paddingLeft: 3,
    paddingTop: 5,

    width: cardWidth,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#e6f6f7',
    opacity: 0.98,

  },

  top: {
    flexDirection: 'row',

  },
  
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
},

img: {
  borderRadius: '100%',
  borderWidth: 3,
  width: 60,
  height: 60,
  borderColor: '#e8e8ff'
},


})