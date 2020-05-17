import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import Roster from "../containers/Roster.js"



export default function ListItem(props) {

    console.log(props)

  const [rosterShown, setRosterShown] = useState(false)
  const [currTeamId, setCurrTeamId] = useState("")

  const displayRosterSetId = (id) => {
    setRosterShown(!rosterShown)
    setCurrTeamId(id)
  }

  return (
      //// IDs passed into displayRosterSetID are hardcoded from the API, this is not ideal but work around for event.target issue
        <ScrollView style={styles.container}>
            <TouchableHighlight onPress={()=> displayRosterSetId(props.imageAndId[1])}>
              <Image 
                  style={styles.teamLogo}
                  source={{
                  uri: props.imageAndId[0]
                }}/>
            </TouchableHighlight>              
              {rosterShown ?  <Roster currTeamId={currTeamId}/> : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    // justifyContent: 'center',
  },
  teamLogo: {
    alignSelf: "center",
    marginTop: 75,
    height: 100,
    width: 100
  }
});
