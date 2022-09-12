
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
/*import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.js';
import SignInScreen from './src/screens/SignInScreen.js';
import SignUpScreen from './src/screens/SignUpScreen.js';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen.js';
import NewPasswordScreen from './src/screens/NewPasswordScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';*/
//import AddCardScreen from './/src/screens/AddCardScreen';
//import AppStack from './AppStack';
import Navigation from './src/Navigation/index.js';
//import LoginProvider from './utils/LoginProvider';
//import Cards from './src/screens/Cards';

export default function App() {
  global.logged = false;
  global.EmailLogged = "";
  global.PasswordLogged = "";
  global.FirstNameLogged = "";
  global.LastNameLogged = "";
  global.Card_NumberLogged = "";
  global.ExpiryLogged = "";
  global.Postal_CodeLogged = "";
  global.CVCLogged = "";
  return (
    <SafeAreaView style={styles.root}>
         <Navigation />
    </SafeAreaView>
  );
 

}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

