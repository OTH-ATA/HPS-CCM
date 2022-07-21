import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import LoginBackground from '../../../assets/Images/LoginBackground.jpg';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.3.3

const s = StyleSheet.create({
  container: {
    marginBottom: 130,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:900,
    width:null,
},
Title: {
    alignItems: 'center',
    justifyContent: "center",
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    height: 40,
    marginTop: 130,
    left: '18%',
},
});

const USE_LITE_CREDIT_CARD_INPUT = false;

export default class Example extends Component {
  _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    return (
    <ImageBackground source={LoginBackground}  style={s.image}>
    <Text style={s.Title}>Add New Credit Card</Text>
      <View style={s.container}>
        
        { USE_LITE_CREDIT_CARD_INPUT ?
          (<LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />) :
            (<CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />)
        }
      </View>
      </ImageBackground>
    );
  }
}