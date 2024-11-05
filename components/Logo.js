import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
   return (
     <View style={styles.container}>
       <Text style={styles.logoText}>JL</Text>
     </View>
   );
};

const styles = StyleSheet.create({
   container :{
     backgroundColor:'#003366', 
     borderRadius :15, 
     paddingVertical :5, 
     paddingHorizontal :15, 
     alignItems:'center', 
     justifyContent:'center', 
     maxWidth :120, 
     alignSelf:'center', 
   },
   logoText :{
     fontSize :40, 
     color:'white', 
   },
});

export default Logo;