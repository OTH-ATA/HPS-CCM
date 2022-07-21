import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    const win = Dimensions. get('window');
    const onRegisterPressed = () =>{
       // console.warn("onRegisterPressed");
        navigation.navigate('ConfirmEmail');
    }
    const onSignInPress = () =>{
       // console.warn("onSignInPress");
        navigation.navigate('SignIn');
    }
  return (
   
        <ImageBackground source={LoginBackground}  style={styles.image}>
            <View style={styles.root}> 
                
                <Text style={styles.Title}>Create An Account</Text>
                    <CustomInput 
                        placeholder="Email"
                        value={email} 
                        setValue={setEmail} 
                        />
                    <CustomInput 
                        placeholder="Password" 
                        value={password} 
                        setValue={setPassword}
                        secureTextEntry
                        />
                    <CustomInput 
                        placeholder="Repeat Password" 
                        value={passwordRepeat} 
                        setValue={setPasswordRepeat}
                        secureTextEntry
                        />
                    <CustomButton onPress={onRegisterPressed} text="Register" />  
                    <CustomButton onPress={onSignInPress} text="Have an account? Sign in"  type ="TERTIARY"/>  
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
        marginTop: 60,
        
    },
    Text: {
        height: 160,
        fontSize: 25,
        marginTop: 120,
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
export default SignUpScreen