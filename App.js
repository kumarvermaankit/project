import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import dataset from "./data.json"
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Cards from './cards';


// getting width of current window
const width = Dimensions.get("window").width






export default function App() {

  // Extracting value from data.json

  const Owner = dataset.data.keys.groups[0].fields
  const vehicle = dataset.data.keys.groups[1].fields
  const important = dataset.data.keys.groups[2].fields
  const additional = dataset.data.keys.groups[3].fields
  const RTO = dataset.data.keys.groups[5].fields


  return (
    <View style={styles.container}>

      <View style={{ display: "flex", width: wp("90%"), flexDirection: 'row' }}>
        <Image source={{
          uri: dataset.data.keys.rcImageDto.imageUrl
        }}
          style={styles.img}

        />
        {/* {Vehicle Details Position based on screen size} */}
        {width > 700 ? <View style={{ width: "40%" }}> <Cards details={vehicle} width="90%" top="15%" title="Vehicle Details" bgColor="#FF7777" /></View> : null}

      </View>

      <View style={width > 415 ? styles.card_parent : styles.card_parent_mobile}>
        {/* {Card component rendering for different car details} */}
        {width > 415 ? null : <Cards details={vehicle} width="20%" title="Vehicle Details" bgColor="#DBD0C0" />}
        <Cards details={Owner} width="20%" title="Ownership Details" bgColor="#3D56B2" />
        <Cards details={RTO} width="20%" title="RTO Details" bgColor="#6ECB63" />

        <Cards details={important} avoid="Insurance Expired! 😱" width="20%" title="Important Details" bgColor="#54436B" />
        <Cards details={additional} width="20%" title="Additional Details" bgColor="#B97A95" />

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp("100%"),
    height: hp("100%")
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    width: width > 415 ? wp('60%') : wp('80%'),
    height: width > 415 ? hp('60%') : hp("25%"),
    border: '2px solid black',
    marginTop: hp('1%'),
    marginBottom: hp('5%'),
    marginLeft: wp("6%")

  },

  card_parent: {
    display: "flex", flexDirection: "row", marginLeft: wp("2%"), resizeMode: 'contain'
  },

  card_parent_mobile: {
    marginLeft: wp("5%"),
    resizeMode: "contain"

  }
});
