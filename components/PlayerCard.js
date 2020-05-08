import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';



export default function PlayerCard() {

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
           <Image 
            style={styles.playerHead}
            source={{
            uri: 'https://www.hockeydb.com/ihdb/photos/sidney-crosby-2020-50.jpg',
          }}/>
          <Text style={styles.text}>Sidney Crosby</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 text: {
   color: "white"
 },
 view: {
    // backgroundColor: "white",
    height: 100,
    width: 400
 },
 playerHead: {
    height: 75,
    width: 75,
    // marginRight: 200
  },
  text: {
      color: "white",
      fontSize: 30,
      marginTop: 10,
      marginRight: 100,
      marginLeft: 30

  }
});
