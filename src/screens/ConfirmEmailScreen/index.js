import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

   
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const win = Dimensions. get('window');
    const onConfirmPressed = () =>{
     //   console.warn("onConfirmPressed");
        navigation.navigate('Home');

    }
    const onSignInPress = () =>{
      //  console.warn("onSignInPress");
        navigation.navigate('SignIn');

    }
    const onResendPress = () =>{
        console.warn("onResendPress");
    }
  return (
    
        <ImageBackground source={LoginBackground}  style={styles.image}>
            <View style={styles.root}> 
                
                <Text style={styles.Title}>Confirm Your Email</Text>
                <Text style={styles.Text2}>A verification code was sent to your email</Text>
                    <CustomInput 
                        placeholder="Enter The Confirmation Code" 
                        value={code} 
                        setValue={setCode}
                        secureTextEntry
                        />
                    
                    <CustomButton onPress={onConfirmPressed} text="Confirm" />  
                    <CustomButton onPress={onResendPress} text="Resend Code"  type ="SECONDARY"/>  
                    <CustomButton onPress={onSignInPress} text="Back to Sign in"  type ="TERTIARY"/> 
 
            </View>
        </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 300,
        height: 460,
        
    },
    Text: {
        height: 160,
        fontSize: 25,
        marginTop: 120,
    },
    Text2: {
        marginTop: -15,
        height:50,
        color: 'grey',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height:900,
        width:null,
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        height: 40,
        marginTop: 170,
    }
    
});
export default ConfirmEmailScreen