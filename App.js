import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import ListItem from "./components/ListItem.js"


export default function App() {

const imagesAndIds = [
  ['https://1000logos.net/wp-content/uploads/2018/05/New-Jersey-Devils-Symbol.jpg', 1],
  ['https://www.logolynx.com/images/logolynx/ce/ce3fda47819cbae4635061d9dae31c6c.jpeg', 5],
  ["https://i.ya-webdesign.com/images/new-york-islanders-logo-png-3.png", 2],
  ["https://www.stickpng.com/assets/images/5a4fbb92da2b4f099b95da18.png", 3], 
  ["https://cdn.freebiesupply.com/logos/large/2x/washington-capitals-1-logo-png-transparent.png", 15],
  ["https://cdn.freebiesupply.com/logos/large/2x/carolina-hurricanes-logo.png",12]
  
]

  return (      
        <View style={styles.container}>
          <ScrollView>
            {imagesAndIds.map(imageAndId => <ListItem imageAndId={imageAndId} />)}           
          </ScrollView>
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
});
