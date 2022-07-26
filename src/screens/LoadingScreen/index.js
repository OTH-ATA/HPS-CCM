import React from 'react'
import { ActivityIndicator, View, StyleSheet} from 'react-native'


export default function LoadingScreen() {
  return (
    <View>
        <ActivityIndicator color="#000" size="large"/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
