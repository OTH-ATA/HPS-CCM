import { View, Text, Image, StyleSheet,useWindowDimensions, ImageBackground, ScrollView, ImageBackgroundBase} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import Logo from '../../../assets/Images/Logo_hps.png';
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';
//import FirebaseUtil from '../../../utils/FirebaseUtil';
const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const win = Dimensions. get('window');
    
    const onSignInPressed = () =>{
       // console.warn("onSignInPressed");
        navigation.navigate('Home');
        /*FirebaseUtil.signIn(email, password).catch((e) => {
            console.log(e);
            alert("Email / Password is wrong");
        });*/
    }
    const onForgotPasswordPressed = () =>{
       // console.warn("onForgotPasswordPressed");
        navigation.navigate('ForgotPassword');
    }
    const onSignUpPressed = () =>{
        //console.warn("onSignUpPressed");
        navigation.navigate('SignUp');
        /*FirebaseUtil.signUp(email, password).catch((e) => {
            console.log(e);
            alert("Something Went Wrong");
        });*/
    }
  return (
        <ImageBackground source={LoginBackground}  style={styles.image}>
            <View style={[styles.root]}> 
                <View style={styles.logo}>
                    <Image 
                        source={Logo}
                        styles={[styles.logo]}
                        resizeMode="center"
                    />
                </View>
                <Text style={styles.Text}>LOG IN</Text>
                
                    <CustomInput 
                        placeholder="Email" 
                        value={email} 
                        setValue={setEmail}
                        type='1'
                        />
                    <CustomInput 
                        placeholder="Password"
                        value={password} 
                        setValue={setPassword} 
                        secureTextEntry
                        type='2'
                        />
                        
                    <CustomButton onPress={onSignInPressed} text="Sign In" />
                    <CustomButton onPress={onForgotPasswordPressed} text="Forgot Password?"  type ="TERTIARY"/>  
                    <CustomButton onPress={onSignUpPressed} text="Do not have an account? Create one"  type ="TERTIARY"/>  
                    
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
        height: 800,
        marginTop: 300,
        top: 20,
    },
    logo: {
        marginTop: 100,
        alignItems: 'center',
        marginLeft: 50,
        height: 20,
    },
    Text: {
        height: 160,
        fontSize: 22.5,
        marginTop: 140,
        
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height:900,
        width:null,
        blurRadius: 150,

    },
    
    bb: {
      width: 1000,
    }
    
});
export default SignInScreen