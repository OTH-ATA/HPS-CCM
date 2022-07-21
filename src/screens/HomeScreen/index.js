import React from 'react'
import { View,Image, Text, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import OrangeBackground from '../../../assets/Images/OrangeBackground.png'


const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <View style={styles.image}>
          <Image
            source={OrangeBackground}
            style={styles.image}
            resizeMode="center"
          />
          
        </View>
        <View style={styles.Text}>
            <Text style={styles.Text}>Wallet</Text>
        </View>
        
      </View>
    </View>
    

  )
}
const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    width:'100%',
    height: '100%',
    alignSelf: 'center',
    
  },
  background:{
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    justifyContent: "center",
    width:'100%',
    height: '60%',
    borderRadius: 35,
    top: -130,
},
Text: {
  alignSelf: 'center',
  fontSize: 25,
  fontWeight: 'bold',
        top: -198,
        bottom: 0,
        left: 0,
        right: 0,
        
        
},
  
});
export default HomeScreen