import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans/600SemiBold";
import { OpenSans_800ExtraBold } from "@expo-google-fonts/open-sans/800ExtraBold";
import { OpenSans_500Medium } from "@expo-google-fonts/open-sans/500Medium";

var cardHeight = 150;
var cardWidth = 170;
const API_KEY = `AIzaSyAgU2TfnXR1jMnnWKr3AZzTDK_TkPO0u40`;

type Place = {
  name?: string;
  editorial_summary?: {
    overview?: string;
  };
  formatted_address?: string;
  formatted_phone_number?: string;
  current_opening_hours?: {
    weekday_text?: Array<string>;
  };
  photos?: Photo[];
  // add any other fields you plan to access
};

type Photo = {
  height: number;
  width: number;
  photo_reference: string;
};

async function fetchPlaceDetails(ID: any) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${ID}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching place details:", error);
    return null;
  }
}

export default function Cards() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [places, setPlaces] = useState<{
    bj: Place | null;
    hdl: Place | null;
    qqn: Place | null;
  }>({
    bj: null,
    hdl: null,
    qqn: null,
  });

  useEffect(() => {
    async function fetchAll() {
      const bj = await fetchPlaceDetails("ChIJM75zpLa1j4ARd8IiWxkW30g");
      const hdl = await fetchPlaceDetails("ChIJK5B_3Z21j4ARuIABkYGEC-8");
      const qqn = await fetchPlaceDetails("ChIJA0G9Rw61j4AR435CQh9ikyI");
      setPlaces({ bj, hdl, qqn });
    }

    fetchAll();
  }, []);

  return (
    <View style={{ marginTop: -cardHeight - 10 }}>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.boxWithShadow]}>
          <TouchableOpacity onPress={() => setModalVisible1(true)}>
            <View style={styles.top}>
              <Image
                style={styles.img}
                source={require("../assets/images/burger.png")}
              />
              <View>
                <Text style={styles.txt}>BJ's Brew..</Text>
                <Text style={styles.subtxt}>Burgers</Text>
              </View>
            </View>
            <View>
              <View style={styles.top}>
                <Image
                  style={[styles.friendimg, { marginLeft: 4 }]}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={modalVisible1}
            animationType="slide"
            onRequestClose={() => setModalVisible1(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                <Text style={[{marginBottom:5,fontFamily: "OpenSans_800ExtraBold", textAlign:'center'}]}>{places.bj?.name}</Text>
                {places.bj?.photos && (
                  <Image
                    source={{
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${places.bj.photos[0].photo_reference}&key=${API_KEY}`,
                    }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <Text style={[{marginVertical:5,fontFamily: "OpenSans_600SemiBold", textAlign:'center'}]}>{places.bj?.formatted_address}</Text>
                <Text style={[{marginVertical:1, textAlign:'center'}]}>{places.bj?.formatted_phone_number}</Text>
                <Text style={[{marginVertical:6, textAlign:'center', fontSize: 16}]}>{places.bj?.editorial_summary?.overview}</Text>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible1(false)}
                >
                  <Text style={styles.buttonText}>Close Popup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={[styles.card, styles.boxWithShadow]}>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <View style={styles.top}>
            <Image
              style={styles.img}
              source={require("../assets/images/haidilao.webp")}
            />
              <View>
                <Text style={styles.txt}>HaiDiLao</Text>
                <Text style={styles.subtxt}>Hot Pot</Text>
              </View>
            </View>
            <View>
              <View style={styles.top}>
                <Image
                  style={[styles.friendimg, { marginLeft: 4 }]}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={modalVisible2}
            animationType="slide"
            onRequestClose={() => setModalVisible2(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                <Text style={[{marginBottom:5,fontFamily: "OpenSans_800ExtraBold", textAlign:'center'}]}>{places.hdl?.name}</Text>
                {places.hdl?.photos && (
                  <Image
                    source={{
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${places.hdl.photos[0].photo_reference}&key=${API_KEY}`,
                    }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <Text style={[{marginVertical:5,fontFamily: "OpenSans_600SemiBold", textAlign:'center'}]}>{places.hdl?.formatted_address}</Text>
                <Text style={[{marginVertical:1, textAlign:'center'}]}>{places.hdl?.formatted_phone_number}</Text>
                <Text style={[{marginVertical:6, textAlign:'center', fontSize: 16}]}>{places.hdl?.editorial_summary?.overview}</Text>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible2(false)}
                >
                  <Text style={styles.buttonText}>Close Popup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={[styles.card, styles.boxWithShadow]}>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <View style={styles.top}>
              <Image
                style={styles.img}
                source={require("../assets/images/burger.png")}
              />
              <View>
                <Text style={styles.txt}>QQ Noodle</Text>
                <Text style={styles.subtxt}>Noodles</Text>
              </View>
            </View>
            <View>
              <View style={styles.top}>
                <Image
                  style={[styles.friendimg, { marginLeft: 4 }]}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
                <Image
                  style={styles.friendimg}
                  source={require("../assets/images/pfp.png")}
                />
              </View>
              <Text style={styles.subtxt}>12:00:00 AM</Text>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={modalVisible3}
            animationType="slide"
            onRequestClose={() => setModalVisible3(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                <Text style={[{marginBottom:5,fontFamily: "OpenSans_800ExtraBold", textAlign:'center'}]}>{places.qqn?.name}</Text>
                {places.qqn?.photos && (
                  <Image
                    source={{
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${places.qqn.photos[0].photo_reference}&key=${API_KEY}`,
                    }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <Text style={[{marginVertical:5,fontFamily: "OpenSans_600SemiBold", textAlign:'center'}]}>{places.qqn?.formatted_address}</Text>
                <Text style={[{marginVertical:1, textAlign:'center'}]}>{places.qqn?.formatted_phone_number}</Text>
                <Text style={[{marginVertical:6, textAlign:'center', fontSize: 16}]}>{places.qqn?.editorial_summary?.overview}</Text>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible3(false)}
                >
                  <Text style={styles.buttonText}>Close Popup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  friendimg: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    margin: 1,
    marginVertical: 3,
  },

  subtxt: {
    marginLeft: 4,
    fontFamily: "OpenSans_500Medium",
    fontSize: 14,
  },

  container: {
    padding: 8,
    height: cardHeight,
  },

  txt: {
    marginLeft: 4,
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 14,
  },

  card: {
    flex: 1,
    paddingLeft: 3,
    paddingTop: 5,

    width: cardWidth,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#e6f6f7",
    opacity: 0.98,
  },

  top: {
    flexDirection: "row",
  },

  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  img: {
    borderRadius: "100%",
    borderWidth: 3,
    width: 60,
    height: 60,
    borderColor: "#e8e8ff",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
    width: "80%",
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#dc3545",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
