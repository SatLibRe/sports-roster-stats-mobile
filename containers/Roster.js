 import React, { useState, useEffect } from 'react';
 import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
 import { SharedElement, TranslateYAndOpacity } from 'react-native-motion';
 import PlayerCard from "../components/PlayerCard.js"

 export default function Roster(props) {

  const [roster, setRoster] = useState([])

  console.log(props)

  useEffect(() => {
    fetch(`http://statsapi.web.nhl.com/api/v1/teams/${props.currTeamId}?expand=team.roster`)
    .then(response => response.json())
    .then(response => {
      setRoster(response.teams[0].roster.roster)
    })
  }, []);

   return (
     <ScrollView>
       {roster.length > 0 && roster.map(player => <PlayerCard key={player.person.id} player={player.person}/>)}
     </ScrollView>
   );
 }

 const styles = StyleSheet.create({
  text: {
    color: "white"
  }
 });
