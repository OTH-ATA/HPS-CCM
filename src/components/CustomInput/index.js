import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, type}) => {
  return (
    <View style={[styles.container, styles['container_'+type]]}>
      <TextInput 
        value ={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={[styles.input]}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        
        backgroundColor: 'white',
        width: 320,
        height: 40,

        borderColor: 'grey',
        borderRadius: 6,
        borderWidth: 0.3,
        paddingHorizontal: 20,
        marginVertical: 10,
        
    },
    container_1: {
      marginTop: -120,
    },
    container_2: {},
    input: {
      height: 40,
      
    },
})
export default CustomInput