import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {

   
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const win = Dimensions. get('window');
    const navigation = useNavigation();
    const onSubmitPressed = () =>{
       // console.warn("onSubmitPressed");
        navigation.navigate('SignIn');

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
                
                <Text style={styles.Title}>Reset Your Password</Text>
                <Text style={styles.Text2}>A verification code was sent to your email</Text>

                    <CustomInput 
                        placeholder="Code" 
                        value={code} 
                        setValue={setCode}
                        secureTextEntry
                        />
                    <CustomInput 
                        placeholder="Enter Your New Password" 
                        value={newPassword} 
                        setValue={setNewPassword}
                        secureTextEntry
                        />
                    
                    <CustomButton onPress={onSubmitPressed} text="Submit" />
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
        top: 40,
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
        marginTop: 130,
    }
    
});
export default NewPasswordScreen