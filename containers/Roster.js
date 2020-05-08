 import React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
 import PlayerCard from "../components/PlayerCard.js"

 export default function Roster() {

   return (
     <View>
       <PlayerCard/>
     </View>
   );
 }

 const styles = StyleSheet.create({
  text: {
    color: "white"
  }
 });
