import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React, {Component, useState} from 'react';
import { Dimensions } from "react-native";
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import { renderNode } from 'react-native-elements/dist/helpers';
import { TextInput } from 'react-native-element-textinput';


export default class SignUpScreen extends Component 
{

    /*const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();

    const win = Dimensions. get('window');*/
    
    constructor(props)
    {
        
        super(props);
        this.state={FirstName:'',LastName:'',Email:'',Password:'',PasswordRepeat:''};
    }
    
     onRegisterPressed = () =>{
       // console.warn("onRegisterPressed");
       
      // this.useState={FirstName:'',LastName:'',Email:'',Password:''};
    }
    
     onSignInPress = () =>{
        this.props.navigation.navigate('SignIn', {});
      // console.warn("onSignInPress");
        
       // navigation.navigate('SignIn');
    }
    
    InsertRecord=()=>{
        
        var FirstName=this.state.FirstName;
        var LastName=this.state.LastName;
        var Email=this.state.Email;
        var Password=this.state.Password;
        var PasswordRepeat=this.state.PasswordRepeat;
        if(FirstName.length==0 || LastName.length==0 || Email.length==0 || Password.length==0 || PasswordRepeat.length==0){
            alert("Required Field is Missing");
        }
        else{
            if(Password != PasswordRepeat){
                alert("Password and Repeat Password do not match");
            }
            else{
                var InsertAPIURL="http://10.0.2.2:80/api/insert.php";

                var headers={
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                };
                
                var Data={
                    FirstName:FirstName,
                    LastName:LastName,
                    Email:Email,
                    Password:Password,
                };

                fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }   
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                });
                this.props.navigation.navigate('Home', {});
            }
        }
    }
    
    render(){
        
  return (
   
        <ImageBackground source={LoginBackground}  style={styles.image}>
            <View style={styles.root}> 
                
                <Text style={styles.Title}>Create An Account</Text>
                    <TextInput 
                        onChangeText={FirstName=>this.setState({FirstName})}
                        style={styles.input2}
                        inputStyle={styles.inputStyle2}
                        labelStyle={styles.labelStyle2}
                        placeholderStyle={styles.placeholderStyle2}
                        textErrorStyle={styles.textErrorStyle2}
                        label="First Name"
                        placeholder="Enter Your First Name"
                        placeholderTextColor="gray"
                        
                        
                        
                
                        />
                    <TextInput 
                        
                        onChangeText={LastName=>this.setState({LastName})}
                        style={styles.input2}
                        inputStyle={styles.inputStyle2}
                        labelStyle={styles.labelStyle2}
                        placeholderStyle={styles.placeholderStyle2}
                        textErrorStyle={styles.textErrorStyle2}
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        placeholderTextColor="gray"
                        
                        />
                    <TextInput 
                        onChangeText={Email=>this.setState({Email})}
                        style={styles.input2}
                        inputStyle={styles.inputStyle2}
                        labelStyle={styles.labelStyle2}
                        placeholderStyle={styles.placeholderStyle2}
                        textErrorStyle={styles.textErrorStyle2}
                        label="Email"
                        placeholder="Enter Your Email"
                        placeholderTextColor="gray"
                        
                        
                        />
                    <TextInput 
                        style={styles.input2}
                        inputStyle={styles.inputStyle2}
                        labelStyle={styles.labelStyle2}
                        placeholderStyle={styles.placeholderStyle2}
                        textErrorStyle={styles.textErrorStyle2}
                        label="Password"
                        placeholder="Enter Your Password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        onChangeText={Password=>this.setState({Password})}
                        
                        />
                    <TextInput 
                        
                       
                        onChangeText={PasswordRepeat=>this.setState({PasswordRepeat})}
                        style={styles.input2}
                        inputStyle={styles.inputStyle2}
                        labelStyle={styles.labelStyle2}
                        placeholderStyle={styles.placeholderStyle2}
                        textErrorStyle={styles.textErrorStyle2}
                        label="Repeat Password"
                        placeholder="Re-Enter Your Password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        />
                        
                    <CustomButton  text="Register" onPress={this.InsertRecord}/>  
                    <CustomButton  onPress={this.onSignInPress} text="Have an account? Sign in"  type ="TERTIARY"/>  
            </View>
        </ImageBackground>
    
  )
  
}}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 350,
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
    },
    container: {
        borderWidth:1,
        borderColor: 'grey',
        backgroundColor: 'white',
        height: 50,
        marginVertical: 6,
        paddingHorizontal: 150,
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


