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
  longitude: -122.0250,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05
}

const BJs = {
  latitude: 37.331332,
  longitude: -122.031814,
}

const HDL = {
  latitude: 37.323785,
  longitude: -122.009201,
}

const QQN = {
  latitude: 37.310707,
  longitude: -122.024205,
}

export default function App() {
  
  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold, 
    OpenSans_800ExtraBold, 
  });

  const mapRef = useRef<any>();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      provider={PROVIDER_DEFAULT}
      initialRegion={INITIAL_REGION}
      showsUserLocation
      ref={mapRef}>
      
      <Marker style= {styles.marker}
        coordinate={BJs}
        >
        <Image style={styles.img} source={require('../assets/images/burger.png')} />
        <Text style={styles.heading}>BJ's Brewhouse</Text>
        <Text style={styles.subheading}>Burgers</Text>

      </Marker>

      <Marker style= {styles.marker}
        coordinate={HDL}
        >
        <Image style={styles.img} source={require('../assets/images/haidilao.webp')} />
        <Text style={styles.heading}>HaiDiLao</Text>
        <Text style={styles.subheading}>Hot Pot</Text>

      </Marker>

      <Marker style= {styles.marker}
        coordinate={QQN}
        >
        <Image style={styles.img} source={require('../assets/images/noodles.jpg')} />
        <Text style={styles.heading}>QQ Noodle</Text>
        <Text style={styles.subheading}>Noodles</Text>

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