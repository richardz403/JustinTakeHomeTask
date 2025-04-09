import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

var cardHeight = 150
var cardWidth = 170

export default function Cards() {
  return (
    <View style={{ marginTop: -cardHeight - 10 }}>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.boxWithShadow]}>
          <Image style={styles.img} source={require('../assets/images/burger.png')} />
          <Text style={styles.txt}>Place 1</Text>
          
        </View>

        <View style={[styles.card,styles.boxWithShadow]}>
          <Image style={styles.img} source={require('../assets/images/burger.png')} />
          <Text style={styles.txt}>Place 2</Text>
          
        </View>

        <View style={[styles.card,styles.boxWithShadow]}>          
          <Image style={styles.img} source={require('../assets/images/burger.png')} />
          <Text style={styles.txt}>Place 3</Text>
          
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 8,
    height: cardHeight
  },

  txt: {
    marginLeft: 12
  },

  card: {
    flex: 1,
    paddingLeft: 14,
    paddingTop: 12,

    width: cardWidth,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#e6f6f7',
    flexDirection: 'row'

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
  height: 60

},


})