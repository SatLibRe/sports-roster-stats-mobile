import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { Opacity } from 'react-native-motion';


export default function PlayerStats(props) {
    
    const [playerStats, setPlayerStats] = useState({})
    const {birthCity, birthCountry, birthDate, birthStateProvince, height, primaryNumber, weight, shootsCatches} = playerStats

    useEffect(() => {
        fetch(`http://statsapi.web.nhl.com/${props.player.link}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.people[0])
            setPlayerStats(response.people[0])
        })
      }, []);


  return (
    <View>
       <Text style={styles.text}> Place of Birth:  {birthCity} {birthStateProvince}, {birthCountry}  </Text>
       <Text style={styles.text}> Birthdate:  {birthDate}  </Text>
       <Text style={styles.text}> Height:  {height}  </Text>
       <Text style={styles.text}> Weight:  {weight}  </Text>
       <Text style={styles.text}> Number:  {primaryNumber}  </Text>
       {playerStats.primaryPosition && <Text style={styles.text}> Position: {playerStats.primaryPosition.name}  </Text>}
       <Text style={styles.text}> Shoots:  {shootsCatches}  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});
