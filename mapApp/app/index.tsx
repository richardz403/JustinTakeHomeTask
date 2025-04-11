import React, { useRef } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import Cards from '@/components/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from '@expo-google-fonts/lato/useFonts';
import { OpenSans_600SemiBold } from '@expo-google-fonts/open-sans/600SemiBold';
import { OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans/800ExtraBold';

const INITIAL_REGION = {
  latitude: 37.3287,
  longitude: -121.9153,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2
}

const Place1 = {
  latitude: 37.3597,
  longitude: -121.8853,
}

const Place2 = {
  latitude: 37.3397,
  longitude: -121.9853,
}

const Place3 = {
  latitude: 37.3197,
  longitude: -121.8953,
}

export default function App() {




  const mapRef = useRef<any>();


  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      provider={PROVIDER_DEFAULT}
      initialRegion={INITIAL_REGION}
      showsUserLocation
      ref={mapRef}>
      
      <Marker  style= {styles.marker}
        coordinate={Place1}
        >
        <Image style={styles.img} source={require('../assets/images/icecream.png')} />
        <Text style={styles.heading}>SALT & STRAW</Text>
        <Text style={styles.subheading}>Double Scoop Ice Cream</Text>

      </Marker>

      <Marker  style= {styles.marker}
        coordinate={Place2}
        >
        <Image style={styles.img} source={require('../assets/images/chipotle.webp')} />
        <Text style={styles.heading}>CHIPOTLE</Text>
        <Text style={styles.subheading}>Burrito Bowl</Text>

      </Marker>

      <Marker style= {styles.marker}
        coordinate={Place3}
        >
        <Image style={styles.img} source={require('../assets/images/burger.png')} />
        <Text style={styles.heading}>McDonalds</Text>
        <Text style={styles.subheading}>Burgers</Text>

      </Marker>


      </MapView>


      <Cards/>


      <TouchableOpacity style={[styles.profCont,{left:'83%'}]}>
        <Image
          source={require('../assets/images/pfp.png')} // Replace with your profile image
          style={styles.profileImage}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  profCont: {
    position: 'absolute',
    top: '5%',
  },

  profileImage: {

    width: 50,
    height: 50,
    borderRadius: 30,
  },

  heading: {
    
    fontFamily: "OpenSans_800ExtraBold"
  },

  subheading: {
    marginTop: -7,
    fontFamily: "OpenSans_600SemiBold"
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  img: {
    borderRadius: '100%',
    borderWidth: 3,
    width: 60,
    height: 60,
    borderColor: '#e8f0ff'

  },
  marker: {
    flex: 1,
    alignItems: 'center',

  }
});