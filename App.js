import React, { useState } from 'react';
import { SharedElement, TranslateYAndOpacity } from 'react-native-motion';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Roster from "./containers/Roster.js"
import ReactNativeComponentTree from 'react-native';


export default function App() {

  const [rosterShown, setRosterShown] = useState(false)
  const [currTeamId, setCurrTeamId] = useState("")

  const displayRosterSetId = (id) => {
    setRosterShown(!rosterShown)
    setCurrTeamId(id)
  }

  return (
        <View style={styles.container}>
            <TouchableHighlight onPress={()=> displayRosterSetId(5)}>
              <Image 
                  id= "5"
                  style={styles.pensLogo}
                  source={{
                  uri: 'https://www.logolynx.com/images/logolynx/ce/ce3fda47819cbae4635061d9dae31c6c.jpeg',
                }}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=> displayRosterSetId(1)}>
              <Image 
                  style={styles.pensLogo}
                  source={{
                  uri: 'https://1000logos.net/wp-content/uploads/2018/05/New-Jersey-Devils-Symbol.jpg',
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
