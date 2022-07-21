import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, styles['container_'+type]]}>
      <Text 
        style={[styles.text, styles['text_'+type]]}>{text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 13,
        marginVertical: 5,
        alignItems:'center',
        borderRadius: 30,
    },
    container_PRIMARY:{
      backgroundColor: '#3B71F3',
    },
    container_SECONDARY:{
      borderColor: '#3B71F3',
      borderWidth: 2,
    },
    container_TERTIARY:{},
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_SECONDARY:{
      color: '#3B71F3',
    },
    text_TERTIARY:{
      color: '#3B71F3',
    },
})

export default CustomButton