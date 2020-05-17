import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { Opacity } from 'react-native-motion';
import PlayerStats from "./PlayerStats.js"



export default function PlayerCard(props) {

  const  [statsShown, setStatsShown] = useState(false)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.playerClick} onPress={() => setStatsShown(!statsShown)}>
            <Text style={styles.text}> {props.player.fullName} </Text>
              {statsShown ? <PlayerStats player={props.player}/> : null}
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
      fontStyle: "italic",
      marginTop: 10,
      marginBottom: 10,
      textAlign: "center"
  }, 

  playerClick: {
    width: "90%",
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 20,
  }
});
