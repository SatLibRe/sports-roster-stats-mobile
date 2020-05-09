 import React, { useState, useEffect } from 'react';
 import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
 import PlayerCard from "../components/PlayerCard.js"

 export default function Roster() {

  const [roster, setRoster] = useState([])

  useEffect(() => {
    fetch("http://statsapi.web.nhl.com/api/v1/teams/5?expand=team.roster")
    .then(response => response.json())
    .then(response => {
      setRoster(response.teams[0].roster.roster)
    })
  }, []);

   return (
     <ScrollView>
       {roster.length > 0 && roster.map(player => <PlayerCard player={player.person}/>)}
     </ScrollView>
   );
 }

 const styles = StyleSheet.create({
  text: {
    color: "white"
  }
 });
