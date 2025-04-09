import React, { useRef } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import Cards from '@/components/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';

const INITIAL_REGION = {
  latitude: 37.3387,
  longitude: -121.8853,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
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
        <Image style={styles.img} source={require('../assets/images/burger.png')} />
        <Text>Place 1</Text>
      </Marker>

      <Marker  style= {styles.marker}
        coordinate={Place2}
        >
        <Image style={styles.img} source={require('../assets/images/burger.png')} />
        <Text>Place 2</Text>
      </Marker>

      <Marker style= {styles.marker}
        coordinate={Place3}
        >
        <Image style={styles.img} source={require('../assets/images/burger.png')} />
        <Text>Place 3</Text>
      </Marker>


      </MapView>

      <Cards/>

    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 60

  },
  marker: {
    flex: 1,
    alignItems: 'center',

  }
});