import React, { Component } from 'react'
import { View,Image, Text, StyleSheet,ImageBackground, ScrollView, Dimensions, useState, useEffect } from 'react-native';
import OrangeBackground from '../../../assets/Images/OrangeBackground.png'
import CreditCardImage from '../../../assets/Images/WhiteCard.png'
import {FAB} from 'react-native-elements';
import { Ionicons, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-element-textinput';
 

export default class HomeScreen extends Component {
   //navigation = useNavigation();
   constructor(props){
    super(props);
    this.state={FindEmail:'',Email:'',Password:'',FirstName:'',LastName:''};
    }
   onAddCardPressed = () =>{
    //console.warn("onAddCardPressed");
    //navigation.navigate('AddCard');
    this.props.navigation.navigate('AddCard', {});
  }
   onDeleteCardPressed = () =>{
    console.warn("onDeleteCardPressed");
  }
   onModifyCardPressed = () =>{
    console.warn("onModifyCardPressed");
  }
  SearchRecord=()=>
    {
        var FindEmail=this.state.FindEmail;
        if(FindEmail.length==0){
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
                    //this.onSignInPressed();
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
    <View style={styles.root}>
      <View style={styles.background}>
        <View style={styles.image}>
          <Image
            source={OrangeBackground}
            style={styles.image}
            resizeMode="center"
          />
          <Image
            source={CreditCardImage}
            style={styles.image2}
            resizeMode="stretch"

          />
          <TextInput
          style={styles.input2}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"                          " + Card_NumberLogged}
          placeholder=""
          placeholderTextColor="gray"
          color="White"
        />
        <TextInput
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"                    " + ExpiryLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
          <TextInput
          style={styles.input4}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {FirstNameLogged + " "+LastNameLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        </View>
        <View style={styles.Text}>
            <Text style={styles.Text}>Wallet</Text>
        </View>
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"First Name:                    " + FirstNameLogged}
          placeholder= ""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"Last Name:                    " + LastNameLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"Card Number:                " + Card_NumberLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"Expiry Date:                    " + ExpiryLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"CVC:                                " + CVCLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"Postal Code:                  " + Postal_CodeLogged}
          placeholder=""
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {"Status:                            Active"}
          placeholder= ""
          placeholderTextColor="gray"
        />
        <FAB 
          onPress={this.onDeleteCardPressed}
          title="Delete" 
          placement="left" 
          size="small"
          color='red'
          icon={<AntDesign name="delete" size={24} color="black" />}
          style={styles.deletestyle} 
          />
          <FAB 
          onPress={this.onModifyCardPressed}
          title="Modify" 
          placement="right" 
          size="small"
          color='orange'
          icon={<AntDesign name="edit" size={24} color="black" />}
          style={styles.deletestyle} 
          />
        <FAB 
          onPress={this.onAddCardPressed}
          title="New CARD" 
          placement="center" 
          size="small"
          color='green'
          icon={<Ionicons name="add-circle" size={24} color="white" />} 
          style={styles.addstyle} 
          />

      </View>
    </View>
    

  )
}
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
    height: '75%',
    borderRadius: 35,
    top: -50,
},
image2: {
  alignSelf: 'center',
  justifyContent: "center",
  width:'80%',
  height: '30%',
  top: -230,
  
  
},
Text: {
  alignSelf: 'center',
  fontSize: 25,
  fontWeight: 'bold',
        top: -275,
        bottom: 0,
        left: 0,
        right: 0,
        
        
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
input: {
  height: 55,
  paddingHorizontal: 12,
  borderRadius: 8,
  borderWidth: 0.5,
  borderColor: '#DDDDDD',
  top: -370,
},
input2: {
  alignSelf: 'center',
  justifyContent: "center",
  height: 55,
  paddingHorizontal: 12,
  borderRadius: 8,
  borderWidth: 0.5,
  borderColor: 'transparent',
  top: -330,
},
input3: {
  height: 55,
  paddingHorizontal: 12,
  borderRadius: 8,
  borderWidth: 0.5,
  borderColor: 'transparent',
  top: -340,
  left: 190,
},
input4: {
  height: 55,
  paddingHorizontal: 12,
  borderRadius: 8,
  borderWidth: 0.5,
  borderColor: 'transparent',
  top: -396,
  right: -50,
},
inputStyle: { fontSize: 16 },
labelStyle: {
  fontSize: 14,
  position: 'absolute',
  top: -10,
  backgroundColor: 'white',
  paddingHorizontal: 4,
  marginLeft: -4,
},
placeholderStyle: { fontSize: 16 },
textErrorStyle: { fontSize: 16 },
deletestyle: {
    top: 550,
},
addstyle:{
  alignSelf: 'center',
},

});