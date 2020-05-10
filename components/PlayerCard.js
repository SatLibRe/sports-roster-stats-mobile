import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function PlayerCard(props) {

  const  [statsShown, setStatsShown] = useState(false)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
           {/* <Image 
            style={styles.playerHead}
            source={{
            uri: 'https://www.hockeydb.com/ihdb/photos/sidney-crosby-2020-50.jpg',
          }}/> */}
          <TouchableOpacity style={styles.playerClick} onPress={() => console.log("hello")}>
            <Text style={styles.text}> {props.player.fullName} </Text>
          </TouchableOpacity>
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
      marginLeft: 20
  }, 
  playerClick: {
    // underlayColor: "white"
  }
});
