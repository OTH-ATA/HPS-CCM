import { View, Text, Image, StyleSheet,useWindowDimensions, ImageBackground, ScrollView} from 'react-native';
import React, {Component, useState} from 'react';
import { Dimensions } from "react-native";
import Logo from '../../../assets/Images/Logo_hps.png';
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../Navigation';
import { TextInput ,AutoComplete} from 'react-native-element-textinput';
//import FirebaseUtil from '../../../utils/FirebaseUtil';

export default class SignInScreen extends Component
{
    
    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const win = Dimensions. get('window');*/
    
    constructor(props){
        super(props);
        this.state={FindEmail:'',FindPassword:'',Email:'',Password:'',FirstName:'',LastName:'', Card_Number:'',Expiry:'',Postal_Code:'',CVC:''};
    }
    
     onSignInPressed = () =>{
        EmailLogged = this.state.Email;
        PasswordLogged = this.state.Password;
        FirstNameLogged = this.state.FirstName;
        LastNameLogged = this.state.LastName;
        Card_NumberLogged = this.state.Card_Number;
        ExpiryLogged = this.state.Expiry;
        Postal_CodeLogged = this.state.Postal_Code;
        CVCLogged = this.state.CVC;
        
        this.props.navigation.navigate('Home', {});
        //console.warn("onSignInPressed");
    }
    
     onForgotPasswordPressed = () =>{
        this.props.navigation.navigate('ForgotPassword', {});
       //console.warn("onForgotPasswordPressed");
       // navigation.navigate('ForgotPassword');
    }
     onSignUpPressed = () =>{
        this.props.navigation.navigate('SignUp', {});
        //console.warn("onSignUpPressed");
        //navigation.navigate('SignUp');
        /*FirebaseUtil.signUp(email, password).catch((e) => {
            console.log(e);
            alert("Something Went Wrong");
        });*/
    }
    SearchRecord=()=>
    {
        var FindEmail=this.state.FindEmail;
        var FindPassword=this.state.FindPassword;
        if(FindEmail.length==0 || FindPassword.length==0){
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/api/search.php";
            var header={
                'Accept':'application/json',
                'Content-Type':'application/json',
            };
            var Data={
                    FindEmail:FindEmail,
                    FindPassword:FindPassword,
            };
            fetch(SearchAPIURL,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.json())
            .then((response)=>
            {
                if((response[0].Email).length == 0){
                    alert("Invalid Credentials ");
                }
                else{
                    this.setState({Email:response[0].Email});
                    this.setState({Password:response[0].Password});
                    this.setState({FirstName:response[0].FirstName});
                    this.setState({LastName:response[0].LastName});
                    this.setState({Card_Number:response[0].Card_Number});
                    this.setState({Expiry:response[0].Expiry});
                    this.setState({Postal_Code:response[0].Postal_Code});
                    this.setState({CVC:response[0].CVC});
                    this.onSignInPressed();
                }
            })
            .catch((error)=>
            {
            alert("Error: "+error);
            })

        }
    }
render(){
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
                
                <TextInput 
                    onChangeText={FindEmail=>this.setState({FindEmail})}
                    style={styles.input2}
                    inputStyle={styles.inputStyle2}
                    labelStyle={styles.labelStyle2}
                    placeholderStyle={styles.placeholderStyle2}
                    textErrorStyle={styles.textErrorStyle2}
                    label="Email"
                    placeholder="Enter Your Email"
                    placeholderTextColor="gray"
                    data={['hello', 'how are you', 'complete']}
                    
                    />
                <TextInput 
                    onChangeText={FindPassword=>this.setState({FindPassword})}
                    style={styles.input2}
                    inputStyle={styles.inputStyle2}
                    labelStyle={styles.labelStyle2}
                    placeholderStyle={styles.placeholderStyle2}
                    textErrorStyle={styles.textErrorStyle2}
                    label="Password"
                    placeholder="Enter Your Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    />
                        
                    <CustomButton onPress={this.SearchRecord} text="Sign In" />
                    <CustomButton onPress={this.onForgotPasswordPressed} text="Forgot Password?"  type ="TERTIARY"/>  
                    <CustomButton onPress={this.onSignUpPressed} text="Do not have an account? Create one"  type ="TERTIARY"/>  
                    
            </View>
        </ImageBackground>
    
  )
}}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 300,
        height: 460,
        height: 800,
        marginTop: 300,
        top: -100,
    },
    logo: {
        marginTop: 100,
        alignItems: 'center',
        marginLeft: 50,
        height: 20,
        top: 130,
    },
    Text: {
        height: 160,
        fontSize: 22.5,
        marginTop: 140,
        top: 120,
        
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
    },
    container: {
        borderWidth:1,
        borderColor: 'grey',
        backgroundColor: 'white',
        height: 50,
        marginVertical: 6,
        paddingHorizontal: 120,
        borderRadius: 10,
        margin:8,
        
    },
    
      input2: {
        height: 55,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 15,
      },
      inputStyle2: { fontSize: 16 },
      labelStyle2: { fontSize: 14 },
      placeholderStyle2: { fontSize: 16 },
      textErrorStyle2: { fontSize: 16 },
});
