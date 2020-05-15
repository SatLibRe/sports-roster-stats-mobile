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
        <View style={styles.container}>
            <TouchableHighlight onPress={()=> displayRosterSetId(props.imageAndId[1])}>
              <Image 
                  style={styles.pensLogo}
                  source={{
                  uri: props.imageAndId[0]
                }}/>
            </TouchableHighlight>
              {rosterShown ?  null : <Text style={styles.logoText}> Click the logo to display the current roster </Text>}
              {rosterShown ?  <Roster currTeamId={currTeamId}/> : null}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pensLogo: {
    marginTop: "10%",
    height: 100,
    width: 100
  },
  logoText: {
    marginTop: "10%",
    color: "white",
    fontStyle: "italic"
  }
});
