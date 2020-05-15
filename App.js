import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, FlatList } from 'react-native'
import ListItem from "./components/ListItem.js"


export default function App() {

const imagesAndIds = [
  ['https://1000logos.net/wp-content/uploads/2018/05/New-Jersey-Devils-Symbol.jpg', 1],
  ['https://www.logolynx.com/images/logolynx/ce/ce3fda47819cbae4635061d9dae31c6c.jpeg', 5]
]

  return (      
        <View style={styles.container}>
           {imagesAndIds.map(imageAndId => <ListItem imageAndId={imageAndId} />)}           
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
