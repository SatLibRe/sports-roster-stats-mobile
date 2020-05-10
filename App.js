import React, { useState } from 'react';
import { SharedElement, TranslateYAndOpacity } from 'react-native-motion';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Roster from "./containers/Roster.js"

export default function App() {

  const [rosterShown, setRosterShown] = useState(false)

  const displayRoster = () => {
    setRosterShown(!rosterShown)
  }

  return (
        <View style={styles.container}>
            <TouchableHighlight onPress={displayRoster}>
              <Image 
                  style={styles.pensLogo}
                  source={{
                  uri: 'https://www.logolynx.com/images/logolynx/ce/ce3fda47819cbae4635061d9dae31c6c.jpeg',
                }}/>
            </TouchableHighlight>
              {rosterShown ?  null : <Text style={styles.logoText}> Click the logo to display the current roster </Text>}
              {rosterShown ?  <Roster/> : null}
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
