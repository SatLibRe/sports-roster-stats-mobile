import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { Opacity } from 'react-native-motion';


export default function PlayerStats(props) {
    
    const [playerStats, setPlayerStats] = useState({})
    const [playerDetails, setPlayerDetails] = useState({})
    const {birthCity, birthCountry, birthDate, birthStateProvince, height, primaryNumber, weight, shootsCatches} = playerDetails
    const {games, goals, assists, points, timeOnIcePerGame} = playerStats
    const pointsPerGame = (points / games).toFixed(2)

    useEffect(() => {
        fetch(`http://statsapi.web.nhl.com/${props.player.link}`)
        .then(response => response.json())
        .then(response => {
            setPlayerDetails(response.people[0])
        })
        fetch(`https://statsapi.web.nhl.com/${props.player.link}/stats?stats=statsSingleSeason&season=20192020`)
        .then(response => response.json())
        .then(response => {
            setPlayerStats(response.stats[0].splits[0].stat)
            console.log(response.stats[0].splits[0].stat)
        })
      }, []);


  return (
    <View>
       <Text style={styles.text}> Place of Birth:  {birthCity} {birthStateProvince}, {birthCountry}  </Text>
       <Text style={styles.text}> Birthdate:  {birthDate}  </Text>
       <Text style={styles.text}> Height:  {height}  </Text>
       <Text style={styles.text}> Weight:  {weight}  </Text>
       <Text style={styles.text}> Number:  {primaryNumber}  </Text>
       {playerDetails.primaryPosition && <Text style={styles.text}> Position: {playerDetails.primaryPosition.name}  </Text>}
       <Text style={styles.text}> Shoots:  {shootsCatches}  </Text>
       <Text style={styles.statsHeader}> Stats </Text>
       <Text style={styles.text}> Games:  {games}  </Text>
       <Text style={styles.text}> Goals:  {goals}  </Text>
       <Text style={styles.text}> Assists:  {assists}  </Text>
       <Text style={styles.text}> Points:  {points}  </Text>
       <Text style={styles.text}> Points Per Game:  {pointsPerGame}  </Text>
       <Text style={styles.text}> Time On Ice Per Game:  {timeOnIcePerGame}  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }, 
    statsHeader: {
        color: "white",
        fontSize: 30,
        fontStyle: "italic",
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center"
    }
});
